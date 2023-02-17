Project Name - userapi
[user api app for CRUD operation]

Requirements
Node.js v14 or later
MySQL v5.7 or later
Getting Started
Clone the repository: git clone https://github.com/your-username/your-project.git
Install dependencies: npm install
Set up your database connection in config/datastores.js
Lift the server: sails lift
Access the API at http://localhost:1337
Running Tests
To run the unit tests:

Start the server: sails lift
Run the tests: npm test
The test results will be displayed in the console
Endpoints
Endpoint	Method	Description
/users	GET	Get all users
/users/:id	GET	Get user by ID
/users	POST	Create a new user
/users/:id	PUT	Update an existing user
/users/:id		
