var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
var bodyParser = require('body-parser');

// var mysql = require('mysql');
// var pool = mysql.createPool({
//   host: 'classmysql.engr.oregonstate.edu',
//   user: 'cs3461_kange',
//   password: '7093',
//   database: 'cs361_kange'
// });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);

//renders design page
app.get('/design', function (req, res) {
    res.render('design');
});

//renders login page
app.get('/login', function (req, res) {
    res.render('login');
});

//renders signup page
app.get('/signup', function (req, res) {
    res.render('signup');
});

//renders account page
app.get('/account', function (req, res) {
    res.render('account');
});

app.use(function (req, res) {
    res.status(404);
    res.render('404');
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.type('plain/text');
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
