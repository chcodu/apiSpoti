import { Schema, model } from 'mongoose';
const esquema = Schema;

const SongEsquema = esquema({
    number: number,
    name: String,
    duration: String,
    file: String,
    album: { type: esquema.ObjectId, ref: 'Album' }
});

module.exports = model('Song', SongEsquema);