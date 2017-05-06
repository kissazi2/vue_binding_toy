var path = require('path');
var webpack =require('webpack');

module.exports = {
 entry:['./src/entry.js'],
 output:{
	path:path.join(__dirname,'dist'),
	filename:'bundle.js'
 },
 module:{
	loaders:[{
		test:/\.js$/,
		include:path.join(__dirname,'src'),
		loaders:['babel']
	}]
 }

}
