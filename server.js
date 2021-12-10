const express = require("express");
const app = express();
app.use(express.static('public'));
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://nevoniuk:Snoopy10@cluster0.p4jif.mongodb.net/CoffeeShop")
//app.get("/", function(req,res) {
   /// res.send("working")
//})

//define structure
const AccountSchema = {
    username: String,
    password: String,
    name: String,
    email: String,
    account_type: String
}

const Account = mongoose.model("Account", AccountSchema); 
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
        account_type: "Account"
    });
    newAccount.save();
    res.redirect('/');
});

app.listen(3000, function() {
    console.log("servers running on 3000");
})