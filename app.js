const express = require('express');
const mongoose = require('mongoose');
const gatosRoutes = require('./routes/gatosRoutes');
const imagenesRoutes = require('./routes/imagenesRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use('/api', gatosRoutes);
app.use('/api', imagenesRoutes);
app.use('/api', usuariosRoutes);

module.exports = app;
