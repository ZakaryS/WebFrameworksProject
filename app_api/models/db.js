const mongoose = require('mongoose');
require("dotenv").config({ path: __dirname + '../../app/.env'});
mongoose.connect( process.env.DBURI).then(() => { console.log("Mongoose is connected.")}, err => { console.log(err)}).catch (e => {
    console.log("Could not connect.");
    process.exit(1);
})
require("./product");