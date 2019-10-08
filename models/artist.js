'use strict'
import { Schema, model } from 'mongoose';
const esquema = Schema;

const ArtistaEsquema = esquema({
    name: String,
    description: String,
    image: String
});

module.exports = model('Artist', ArtistaEsquema);