Install requirements:
 - docker (https://docs.docker.com/get-docker/)

To initialize this project, run `docker compose up` from the root of this project. This will build and seed the database. By default the database runs on port `5432` and is also exposed on `5432`, if you want to change this you can update `docker-compose.yml`.


Steps to execute:
1. Run the command to update packages `npm update`
2. Run the command to build and seed the database `docker compose up`
3. run this command to start the application `npm run dev`
4. end-point to get the vehicle based on query `http://localhost:5000/vehicles/3?timestamp=2022-09-12 10:00:00`
   - Get the vehicle details by passing vehicleId and/or timestamp to retrieve status at that time
   - Cache is maintained for 1 min for the same query
