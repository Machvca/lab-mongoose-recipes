const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  
   title: {
    type: String,
    required: true, // este elemento es obligatorio, si no, error!
    unique: true // este elemento no puede repetirse, si se fuese a repetir, error!
  },

  level: {
    type: String,
  enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"],
  },

  ingredients: {
    type: String,
     // en caso que la caracteristica no se pase, será el valor indicado.
  },

  // como agregar arrays como propiedades.
  cuisine: { 
      type: String,
   require: true,
  },

  dishType: {
    type: String,
    enum: ["breakfast","main_course","soup","snack","drink","dessert","other"],
  },

  image:{
    type:String,
    defaultValue: "https://images.media-allrecipes.com/images/75131.jpg",
  },
 duration:{
    type:Number, //min="0",
    
  },
 creator:{
    type:String,
    
  },
created:{
    type:Date //default:"today",
    
  },


});
  
  
  // TODO: write the schema


const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
