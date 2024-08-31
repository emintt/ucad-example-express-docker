import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import { deleteItem, getItemById, getItems, getQuantity, postItem, putItem } from './items.js';
import { deleteMediaItem, getMedia, getMediaById, postMediaItem, putMediaItem, staticMediaItem } from './media.js';
import { deleteUser, getNumberOfUsers, getUser, getUserById, postUser, putUser } from './user.js';


const hostname = '0.0.0.0';
const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'pug');
app.set('views', 'src/views');

// parse incoming JSON data from http requests
app.use(express.json());
app.use('/docs', express.static(path.join(__dirname, '../docs')))
app.use('/media', express.static(path.join(__dirname, '../media')))

// simpmle custom middleware for logging/debugging all requests
app.use((req, res, next) => {
  console.log('Time:', Date.now(), req.method, req.url);
  next();
});

// using pug to render page
app.get('/', (req, res) => {
  const values = {
    title: "REST API docs", 
    message: "Landing page using pug",
    info: "Implement a REST API by following  API reference with the mock data included in it",
    link: "https://github.com/mattpe/ucad/blob/main/assets/media-api-reference-v1.md",
    mediaApi: "http://127.0.0.1:3000/api/media"
  };
  res.render('home', values);
});

app.get('/media/9626', (req, res) => {
  const values = staticMediaItem;
  values.file_name = staticMediaItem.filename;
  console.log(values);
  res.render('media-item', values);
});

// routing example
app.get('/kukkuu', (request, response) => {
  const myResponse = {message: "Hello again"};
  response.status(400);
  // response.json(myResponse);
  response.sendStatus(200);
});

// jos kirjoittaa selaimessa ../kukkuu, tää ei toteuta vaan ylhäällä oleva koodi
app.get('/:message', (req, res) => {
  // res.send('Welcome to my REST API!');
  const values = {title: "Dummy RESR API docs", message: req.params.message};
  res.render('home', values);
});

// example generic items api
// get all items
app.get('/api/items', getItems);

// get item by id
app.get('/api/items/:id', getItemById);

// edit
app.put('/api/items');

// add new item
app.post('/api/items', postItem);

// delete
app.delete('/api/items/:id', deleteItem);

// put
app.put('/api/items/:id', putItem)

// get item quantity
app.get('/api/items-quantity', getQuantity);


// assignmnet 2
// media endpoints
app.get('/api/media', getMedia);

// get one media item
app.get('/api/media/:id', getMediaById);

// post media item
app.post('/api/media', postMediaItem);

// modify media item
app.put('/api/media/:id', putMediaItem);

//delete media item
app.delete('/api/media/:id', deleteMediaItem);

// user endpoints
// get all users
app.get('/api/user', getUser);

// get a user
app.get('/api/user/:id', getUserById);

// add a user
app.post('/api/user', postUser);

// modify a user
app.put('/api/user/:id', putUser);

// delete a user
app.delete('/api/user/:id', deleteUser);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


