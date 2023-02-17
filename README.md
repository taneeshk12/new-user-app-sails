

**Project Name** USERAPI

[USERAPI to perform CRUD operation on it]

**Requirements**

● [Node.js](https://nodejs.org/en/)[ ](https://nodejs.org/en/)v14 or later

● [MySQL](https://www.mysql.com/)[ ](https://www.mysql.com/)v5.7 or later

**Getting Started**

\1. Clone the repository: git clone https://github.com/taneeshk12/new-user-app-sails.git

\2. Install dependencies: npm install

\3. Set up your database connection in config/datastores.js

Change your database according to database name and add table name in api/models/user.js

\4. Lift the server: sails lift

\5. Access the API at http://localhost:1337/user

**Running Tests**

To run the unit tests:

\1. Start the server: sails lift

\2. Run the tests: npm test or ‘mocha user-api-app/test/integration/controllers/UserController.test.js’

\3. The test results will be displayed in the console

**Endpoints**





**Endpoint**

**Method**

**Description**

/user

GET

GET

POST

PUT

Get all users

/user/:id

/user

Get user by ID

Create a new user

/user/:id

/user/:id

Update an existing user

Delete an existing user

DELETE

