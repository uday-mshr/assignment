// mongo-init-scripts/init.js
import dotenv from 'dotenv';
dotenv.config();


// Get the value of the MONGO_DATABASE_USER environment variable
var databaseUser = process.env.MONGO_DATABASE_USER || 'root';

// Get the value of the MONGO_DATABASE_PASSWORD environment variable
var databasePassword = process.env.MONGO_DATABASE_PASSWORD || 'examplePassword';

// Get the value of the MONGO_DATABASE_NAME environment variable
var databaseName = process.env.MONGO_DATABASE_NAME || 'dataDB';



// Create a user for the specified database
db.createUser({
  user: databaseUser,
  pwd: databasePassword,
  roles: [
    {
      role: 'readWrite',
      db: databaseName
    }
  ]
});
