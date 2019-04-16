const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost/vampires';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose is connected to ${connectionString}`);
});

mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose is disconnected from ${connectionString}`);
});

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose err: ${err}`);
});