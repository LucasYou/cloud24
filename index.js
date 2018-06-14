const express = require("express");
const hbs = require('hbs');
var body_parser = require("body-parser");
var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + "/public"));
app.use(body_parser());
app.use(body_parser.urlencoded({ extended: true}));

const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/cloud24', (err, client) =>{
    if(err) return console.log("Unable to connect to MongoDB server");

    console.log("Connected to MongoDB server");
    const db = client.db("cloud24");

    db.collection("User").insertOne({
        firstname: "Lucas",
        lastname: "You"
    },(err, result) =>{
        if(err) return console.log("Unable to insert User", err);
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();

});

app.listen(9000, () => {
    console.log("Server running at port 9000");
});
