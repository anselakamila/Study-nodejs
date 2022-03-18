// import from 'express'
const express = require('express');

// instaliete express
const app = express();

// rounting index: / menggunakan method  Get 
app.get('/',(req,res) => {
    res.send('Hello World');
});

//tentukan port deri server
app.listen(3000, () =>{
    console.log('Server berjalan di port 3000');  
});
