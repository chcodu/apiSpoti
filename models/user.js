'use strict'
import { Schema, model } from 'mongoose';
const esquema = Schema;

const UsuarioEsquema = esquema({
    name: String,
    surname: String,
    email: String,
    password: String,
    role: String,
    image: String
});

export default model('User', UsuarioEsquema);