const express = require('express'); 
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); 

const app = express(); 
app.use(express.json());
app.use(cors());

const uri = "mongodb+srv://Siddharth:Siddharth@cluster0.zt0il.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser : true, useUnifiedTopology: true}); 
const connection = mongoose.connection; 
connection.once('open', () => {
    console.log('Database connection activated');
})

const port = 5000; 

//enabling routes 
const userRoute = require('./routes/userRoute');
app.use('/users', userRoute);

app.listen(port, () => {
    console.log('App started on : ' + port);
})