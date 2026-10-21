const mongoose = require('mongoose');
const path = require('path');
require("dotenv").config({ path: path.join(__dirname, '../../app/.env')});
mongoose.connect( process.env.DB_URI).then(() => { console.log("Mongoose is connected.")}, err => { console.log(err)}).catch (e => {
    console.log("Could not connect.");
    process.exit(1);
})
require("./product");