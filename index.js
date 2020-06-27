const express = require('express');
const app = express();

const cors = require('cors');

const { mongoose } = require('./database');
//Configuracion
app.set('port', process.env.PORT || 3000);
//Middlewares
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
//Rutas
app.use('/api/usuarios', require('./routes/usuarios.route'));
app.use('/api/afiliados', require('./routes/afiliados.route'));
//Inicio
app.listen(app.get('port'), () =>{
    console.log("Server iniciado en puerto ",app.get('port'));
})