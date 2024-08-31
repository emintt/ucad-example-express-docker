CREATE USER 'mediashare'@'localhost' IDENTIFIED BY '1234';
GRANT ALL PRIVILEGES ON `MediaSharingApp`.* TO 'mediashare'@'localhost';
FLUSH PRIVILEGES;
