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


app.get("/", function(req, res) {
    const studentsList = JSON.parse(localStorage.getItem('Enrolled Students') || '[]');
    res.render('home', {
        students: studentsList
    });
});

app.post('/', function(req, res) {
    const newStudent = {
        name: req.body.name,
        email: req.body.email,
        website: req.body.website,
        image: req.body.image,
        gender: req.body.gender,
        skills: req.body.skills
    };
    const studentsList = JSON.parse(localStorage.getItem('Enrolled Students') || '[]');
    studentsList.push(newStudent);
    localStorage.setItem('Enrolled Students', JSON.stringify(studentsList));
    res.redirect('/');
});

// localStorage.clear();