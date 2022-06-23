const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then((x) => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany();
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
  })

  .then((response) => {
    return Recipe.create({
      title: "Jorge",
      level: "UltraPro Chef",
      ingredients: ["frijo", "arroz", "pollo"],
      cuisine: "mexicano",
      dishType: "other",
      image: "https://es.wikipedia.org/wiki/Chilaquiles",
      duration: 50,
      creator: "enrique",
      created: "2013-02-08",
    });
  })

  .then((response) => {
    //descomentarrr;
    // console.log("bob ha sido agregado")
    //console.log("Base de datos limpia!");

    // añadir muchos
    return Recipe.insertMany(data);
    //console.log(Recipe);
  })

  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
