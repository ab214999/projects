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
("place Mongo String here"} 
)
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
