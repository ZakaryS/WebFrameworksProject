const mongoose = require('mongoose');
require("dotenv").config({ path: __dirname + '../.env'});
try {
    mongoose.connect( process.dotenv.DBURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => { console.log("Mongoose is connected.")}, err => { console.log(err)});
} catch (e) { console.log("Could not connect."); }
require("./product");