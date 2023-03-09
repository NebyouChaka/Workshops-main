const express = require('express');
const app = express();
const { Dog } = require('./db');
const { sequelize } = require('./db/db');
const { Op } = require('sequelize');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/dogs/', async (req, res, next) => {
  //Check to see if req.query has any keys by first converting the object into an array
  //Then we check to see if the array is empty
  //If the array is not empty, there is a string query
  if(Object.keys(req.query).length !== 0) {
    const {color} = req.query 
    const dogs = await Dog.findAll({where: {color}})
    res.send(dogs)
  } else {
     //If the array is empty, there is no string query
    const dogs = await Dog.findAll()
    res.send(dogs)
  }

});




const { PORT = 4000 } = process.env;

app.listen(PORT, () => {
  sequelize.sync({ force: false });
  console.log(`Dogs are ready at http://localhost:${PORT}`);
});
