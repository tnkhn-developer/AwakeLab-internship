
###Instructions execute in order:

-docker-compose up --build -d 
-cat init.sql | docker exec -i --user postgres crud-docker-copy3-db-1  psql -U postgres
-docker-compose up

###Notice:
 I have changed usernames and passwords. These can be found in process.env file.



