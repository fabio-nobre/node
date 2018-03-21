// var fs = require('fs'),
	// xml2js = require('xml2js');

// var parser = new xml2js.Parser();


// fs.readFile(__dirname + '../teste.xml', "utf8",function(err, data) {
    // // handle err...

    // var re = new RegExp("<url>(?:(?!<article)[\\s\\S])*</url>", "gmi")
    // data = data.replace(re, ""); // remove node not containing article node
    // console.log(data);
    // //... parse data ...
// });

var fs = require('fs'),
		xml2js = require('xml2js');

var parser = new xml2js.Parser();

fs.readFile('teste.xml', function(err,data){
	
	parser.parseString(data, function(err, result){
		console.dir(result);
		console.log('Read finished');
	});

});