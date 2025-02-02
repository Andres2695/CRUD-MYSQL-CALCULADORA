const express = require ('express');
const path= require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConection  = require('express-myconnection');

const app = express();
//importando rutas

const operationRoutes= require('./routes/Operation')

//settings
app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
//middlewares
app.use(morgan('dev'));
app.use(myConection(mysql, {
    host: 'localhost',
    user : 'root',
    password:'password',
    port:3306,
    database: 'calculadora'

},'single'));
app.use(express.urlencoded({extended: false}));
//routes
app.use('/',operationRoutes);

//static files
app.use(express.static(path.join(__dirname,'public')));

//start server

app.listen(app.get('port'),()=> {

    console.log('Server on port 3000');
});