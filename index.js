const mongoose = require('mongoose');
const app = require('./api');


mongoose.Promise = global.Promise;
mongoose.connect('').then( res => {
    app.listen('8080',(err,resp) => {
        if (err) {
            console.log(err);
            
        } else {
            console.log('Escuchando desde el puerto 8000');
        }
    });
}).catch( err => {
    console.log(err);
    
});