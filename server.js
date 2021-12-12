const path = require("path");
const User = require(path.resolve(__dirname, "userSchema.js"));
//const config = require(path.resolve(__dirname, "../config.json"));

const express = require("express");
const app = express();
app.use(express.static('public'));
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://nevoniuk:Snoopy10@cluster0.p4jif.mongodb.net/CoffeeShop", {useNewUrlParser: true}, {useUnifiedTopology: true})
//app.get("/", function(req,res) {
  //  res.send("working")
//})

//define structure

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
})
//.listen(3000);

app.post('/', function(req, res) {
    let newAccount = new Account({
        username: req.body.username,
        password: req.body.password,
        name: req.body.firstname,
        email: req.body.email,
    });
    newAccount.save();
    res.redirect('/');
});

app.listen(3000, function() {
    console.log("servers running on 3000");
})

module.exports = mongoose.connection