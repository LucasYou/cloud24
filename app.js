const express = require("express");
const hbs = require('hbs');
const body_parser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.use(express.static(__dirname + "/public"));
app.use(body_parser());
app.use(body_parser.urlencoded({
    extended: true
}));

app.get('/', (req, res) =>{
    res.send("Hello");
})


app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
