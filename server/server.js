const express = require("express");

const app  = express();

app.use(express.json());


app.listen(3007 , ()=>{
    console.log("Server is running on the port 3007")
})