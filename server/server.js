const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 
require('dotenv').config(); 

const app = express(); 
app.use(express.json());
app.use(cors());
const port = process.env.port || 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection; 

connection.once('open', () => {
    console.log('DB connection activated'); 
})

//notes part 
const noteRouter = require('./routes/noteRoute');
app.use('/notes', noteRouter);

app.listen(port, () => {
    console.log('App running on port ' + port);
})