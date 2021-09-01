const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/api');
mongoose.Promise = global.Promise;

app.use(express.json());
app.use(express.urlencoded());
app.set('view engine', 'ejs');
app.use('/api',require('./routes/api'));

app.use(function(err,req,res,next){
    res.status(422).send({error: err.message});
 });


app.listen(process.env.port || 4000, function(){
    console.log('Server is up');
 });