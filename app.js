const express = require('express');
const mongoose = require('mongoose');
const gatosRoutes = require('./routes/gatosRoutes');
const imagenesRoutes = require('./routes/imagenesRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
 
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error al conectar a MongoDB', err));


app.use('/api', gatosRoutes);
app.use('/api', imagenesRoutes);
app.use('/api', usuariosRoutes);

module.exports = app;
