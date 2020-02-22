var express = require('express');
var app     = express();
var port    = process.env.PORT || 3000;
var path    = require('path');
var bodyParser = require('body-parser');
const hbs = require('hbs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.engine('html', require('hbs').renderFile);
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'../views'));
app.use('/public',express.static(path.join(__dirname,'../assets'))); //untuk include bootstrap

// app.use('/assets',express.static(__dirname + '/public'));



app.get('/', function(req, res) {
	// console.log(__dirname);
	res.redirect('/mahasiswa');
});

app.get('/mahasiswa', function(req, res) {
	// console.log(__dirname);
	require('../controllers/mahasiswaController').index(req,res);
});

app.post('/mahasiswa', function(req, res) {
	require('../controllers/mahasiswaController').create(req,res);
});

app.post('/mahasiswa/:id', function(req, res) {
	require('../controllers/mahasiswaController').update(req,res);
});

app.get('/show/edit/mahasiswa/:id', function(req, res) {
	require('../controllers/mahasiswaController').show_edit(req,res);
});

app.post('/deletemahasiswa/:id', function(req, res) {
	require('../controllers/mahasiswaController').erase(req,res);
});

app.listen(port);

console.log('Aurora Serve on port ' + port);