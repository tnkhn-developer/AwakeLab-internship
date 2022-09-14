# Awakelabs-internship

## Project-description
A create-read-update-delete server with nodejs and docker. Docker is used to containerize the server and database. Also to communicate between the containers to provide CRUD operations.

## Technologies used
- Server: Nodejs
- Database: Postgresql
- Containerization: Docker
- UI: Dust, Html, Css, Bootstrap, Font-awsome.

## Instructions execute in order
- docker-compose down --volumes </br>
- docker-compose up --build -d </br>
- cat init.sql | docker exec -i --user postgres crud-docker-copy3-db-1  psql -U postgres </br>
- docker-compose up </br>

## Files and Routes
- Server.js contains the the route to run the app on localhost:5000/
- In the routes folder members.js contains the routes of the CRUD operations.
- In the routes folder others.js contains the route to show all other routes unavailable.
- Views folder contains all the dust files for rendering the UI.
- localhost:5000/new-member is the route to create new member.

## Notice
 I have changed usernames and passwords. These can be found in process.env file.





