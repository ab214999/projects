const path= require("path");
const express= require('express');
const bodyParser = require("body-parser"); 
const mongoose = require('mongoose');
//const DB = config.get(MONGO_URL);
const postsRoutes = require("./routes/posts");
const userRoutes =require("./routes/user");
const { config } = require("process");

//const { brotliDecompress } = require('zlib');
 
const app = express();

mongoose.connect
("mongodb+srv://Abishek:5vIcc1q1LmgFKoT6@cluster0.pcaa8.mongodb.net/node-angular?retryWrites=true&w=majority", {useUnifiedTopology: true,
useNewUrlParser: true
,useCreateIndex: true} 
)
//?retryWrites=true&w=majority           mongodb+srv://Abishek:5vIcc1q1LmgFKoT6@cluster0.pcaa8.mongodb.net/node-angular?retryWrites=true&w=majority
.then(() =>{
    console.log('Connection established to database');
})
.catch(() =>{
    console.log('Connection Failed');
});
   
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/images", express.static(path.join("backend/images"))); 
 
app.use((req, res, next) => {
     
    res.setHeader("Access-Control-Allow-Origin", "*" );
    res.setHeader(  
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods",
     "GET, POST, PATCH, PUT , DELETE, OPTIONS"
     );  
    next();
 
});

app.use("/api/posts",postsRoutes);
app.use("/api/user",userRoutes);

module.exports = app