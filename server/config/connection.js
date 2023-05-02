const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://jsr5404:8JvbczGYJFXEBbX1@atlascluster.a80m33j.mongodb.net/?retryWrites=true&w=majority');

module.exports = mongoose.connection;
