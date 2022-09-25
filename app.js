const express = require("express");
const bodyParser = require("body-parser");
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(3000, function() {
    console.log("Server is running at Port 3000.");
});

// localStorage.setItem('Enrolled Students', []);

app.get("/", function(req, res) {
    // const students = JSON.parse(localStorage.getItem('key1')).name;
    res.render('home', {
        students: []
    });
});

app.post('/', function(req, res) {
    const obj = {
        name: req.body.name,
        email: req.body.email,
        website: req.body.website,
        imgae: req.body.image,
        gender: req.body.gender,
        skills: req.body.skills
    }
    console.log(obj);
    res.redirect('/');
    // localStorage.setItem('key1', JSON.stringify(obj));
});