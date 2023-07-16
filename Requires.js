const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const Students = require('./Routes/Students');
// const Teachers = require('./Routes/Teachers')
const Schemes = require('./Routes/Schemes');
const Users = require('./Routes/Users');

const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended :  true}));
app.use(bodyparser.json());
app.use('/Students', Students);
// app.use('/Teachers', Teachers);
app.use('/Schemes',Schemes);
app.use('/Users',Users);





module.exports = app;