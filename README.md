## Assignment - First images and containers with Docker

### Part 1: Docker tutorial

![docker containers](/screenshots/todoapp-container.png)

### Part 2: Own image from scratch

- Käytin viime vuoden kurssin Express-sovellusta.
- Komennot: docker init, docker compose up --watch, docker compose up --build
- Lisäsin mongo service docker hub sivun ohjeiden mukaan: https://hub.docker.com/_/mongo
- Asensin mongoose paketti ja yhdistin mongodb:hen
- Rakenna ja ajaa: docker compose up --build
  ![docker containers](/screenshots/containers.png)
  ![server logs](/screenshots/server-logs.png)
  ![mongo express logs](/screenshots/mongo-express-logs.png)
