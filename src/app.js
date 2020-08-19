const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv')

dotenv.config();
const recipeRouter = require('./routes/recipeRoute');


const app = express();

app.use(cors());
app.use(bodyParser.json())

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.PASSWORD
  ); 
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true } )
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

  app.use('/api', recipeRouter);



 



module.exports = app;