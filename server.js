const express = require ("express");
const mongoose = require ("mongoose");
const requireDir = require("require-dir");
const cors = require ("cors");

//Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DB
mongoose.connect(
     'mongodb+srv://admin:teste123@cluster0-yfcsr.mongodb.net/test?retryWrites=true&w=majority', 
     { useNewUrlParser: true }
);
requireDir('./src/models');

//Rotas
app.use('/api', require("./src/routes"));

app.listen( process.env.PORT || 3000);