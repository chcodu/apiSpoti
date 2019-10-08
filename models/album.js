'use strict'
import { Schema, model } from 'mongoose';
const esquema = Schema;

const AlbumEsquema = esquema({
    title: String,
    description: String,
    year: String,
    image: String,
    artist: { type: esquema.ObjectId, ref: 'Artist' }
});

module.exports = model('Album', AlbumEsquema);