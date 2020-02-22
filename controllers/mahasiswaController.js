//declare var con from enviroment//
var main = require('../core/aurora-crud/aura/sysaura');

function index(req, res) {
	main.read({
	'models' : ['mahasiswaModel'],
	'select' : ['*']
	}).then(function (q) {
		 try {
			res.render('mahasiswa',{
				results:q.data
			});
			}catch(error){

		}
	},function(err){
		 try{
			
			}catch(error){

		} 
	});
}

function create(req, res) {
	main.insert({
	'models' : ['mahasiswaModel'],
	'field' : ['nim','nama'],
	'result' : [
		req.body.nim,
		req.body.nama
	
	]
	}).then(function (q) {
		 try {
			res.redirect("/mahasiswa");
			}catch(error){

		}
	},function(err){
		 try{

			}catch(error){

		} 
	});
}

function update(req, res) {
	main.update({
	'models' : ['mahasiswaModel'],
	'set' : [
		['nim','=',req.body.nim],
		['nama','=',req.body.nama]
	],
	'where' : [
		['id','=',req.params.id]
	]
	}).then(function (q) {
		 try {
			res.redirect("/mahasiswa");
			}catch(error){

		}
	},function(err){
		 try{

			}catch(error){

		} 
	});
}

function show_edit(req, res) {
	main.read({
	'models' : ['mahasiswaModel'],
	'select' : ['*'],
	'where' : [
		['id','=',req.params.id]
	]
	}).then(function (q) {
		 try {
			
			}catch(error){

		}
	},function(err){
		 try{
			
			}catch(error){

		} 
	});
}

function erase(req, res) {
	main.erase_query({
	'models' : ['mahasiswaModel'],
	'where' : [
		['id','=',req.params.id]
	]
	}).then(function (q) {
		 try {
			res.redirect("/mahasiswa");
			}catch(error){

		}
	},function(err){
		 try{
			
			}catch(error){

		} 
	});
}


module.exports.index = index;
module.exports.create = create;
module.exports.update = update;
module.exports.show_edit = show_edit;
module.exports.erase = erase;
