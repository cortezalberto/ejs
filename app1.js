const express = require('express');
const app = express();

const path = require('path');



/* 
*  almacenamos en app la ejecucion de express para tener todos
*  los metodos disponibles en un objeto
*/
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');


app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(3000, ()=>{
    console.log('Servidor Correctamente funcionando en el puerto 3000');    
});
