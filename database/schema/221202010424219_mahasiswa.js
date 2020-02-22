module.exports.create = { 
	'table_name' : 'mahasiswa', 
	'engine' : 'innoDB', 
	'blueprint' : function(){
		increment('id');
		integer('nim',12),unique();
		varchar('nama',255);

	}
};

module.exports.update = {
	'blueprint' : function(){

	}
};

module.exports.delete = {
	'blueprint' : function(){
		dropIfExistsTable('mahasiswa');
	}
};
