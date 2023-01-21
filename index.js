const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3001;

//Server
app.listen(port, () => {
  console.log(`Server iniciado en http://localhost:${port}`);
});


//DataBase
const urlMongoDB = //"mongodb://localhost:27017/";
  "mongodb+srv://xs5fpnDy3w604NN:sKSJgCnr066y3l98@for-testing.cpp1k.mongodb.net/user-service?retryWrites=true&w=majority";
  // mongodb+srv://xs5fpnDy3w604NN:sKSJgCnr066y3l98@for-testing.cpp1k.mongodb.net/contact-service?retryWrites=true&w=majority;


// Comentar Control + k + c 
// Descomentar Control + k + u

(
  async () => {
    try {
      // conexion db
      mongoose.connect(urlMongoDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("La conexion a la base de datos es correcta");
    } catch (error) {
      console.log(error);
      throw new Error(" error en la base de datos");
    }
  } 
)();