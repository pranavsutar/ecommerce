const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.MONGODB_URI , {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
        console.log('MongoDB is connected with server: ${data.connection.host}');
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = connectDatabase;