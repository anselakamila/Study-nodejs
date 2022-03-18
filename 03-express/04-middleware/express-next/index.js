//require debtov
require("dotenv").config();

//import express
const express = require("express");

// import body-parser
const bodyParser = require("body-parser");

//import module headers
const headers= require('./middlewares/headers')

//instantiate express
const app = express();

// import middleware pertama yakni body-parser
// middleware kedua menampilkan headers dari request
app.use( bodyParser.json(),headers);

//middleware hanya berlaku pada method post di index /
// tampilkan isi menggunkan middleware body
//tampilkan data request body ke client
app.post("/", bodyParser.urlencoded({extended:true}),
body,
(req,res,next) => {
    //kirim data req.body ke client menggunakan req.send
    res.send(req.body);
});

//middleware untuk selain method POST di index /
app.use("/",(req, res, next) => {
    res.send(req.headers);
})

//port
app.listen(process.env.PORT, () => {
      console.log(`Server berjalan di port ${process.env.PORT}`);
});
