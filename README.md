# Pragmateam code challenge


## Highlights
- Refactor frontend solution layering amont different level as a service, objects and mock entity.
- Create more useful tests for each use case of the page.
- Automatizing code coverage task on starting application.
- Removing any dead code visible in the solution
- Each method on frontend reach a specific function so i will be easier to test them.
- Remove redundant code in comparison with the original project.


## Some things to improve with more time
- I would have liked to make test on unmounting the app.
- I would have liked to make more functional methods for server app that get data from a certain datasource.

## Approach
Following some good practices to ensure a good Test Coverage that comes from a Good Coverage, I integrated the Angular Testing Tool where can run code coverage against all code. The result of this operation give me an excellent insight into the status coding practices. The goal defined was 80%, so creating as many test as possible was the plan to reduce the undetected bugs that can have the project. 

## Test script
- `ng test --code-coverage` - Run tests and generate report

Please refer to the provided document for the code challenge requirements.

## Available scripts

### Root
- `npm install` - Installs dependencies client and server apps
- `npm start` - Runs client and server apps

### Client
- `npm start` - Start the application (Port 4200)
- `npm test` - Runs available tests

### Server
- `npm start` - Start the application (Port 8081)
