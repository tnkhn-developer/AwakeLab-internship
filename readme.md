# Awakelabs-internship

## Project-description
A create-read-update-delete server with nodejs and docker. Docker is used to containerize the server and database. Also to communicate between the containers to provide CRUD operations.

## Instructions execute in order
 -docker-compose up --build -d </br>
-cat init.sql | docker exec -i --user postgres crud-docker-copy3-db-1  psql -U postgres </br>
-docker-compose up </br>

## Architecture followed 
The project follows Model-View-Controller architecture. This is most popular for Node applications.


## Notice
 I have changed usernames and passwords. These can be found in process.env file.





