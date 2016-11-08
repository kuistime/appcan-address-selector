var fs = require('fs');

var path_from = '../data/data.txt';
var path_to = '../data/plain.json';

//var stat = fs.statSync(path_from);

var s = fs.readFileSync(path_from).toString();
var arr = s.split(/\n/);
//console.log(arr.length);

var res = arr.map(function(o,i,a){
  var tmp = o.split(/\s+/);
  return {
    code: tmp[0],
    name: tmp[1]
  }
});
//console.log(res);

var errCount = 0;
res.forEach(function(o){
  if(o.code&&o.name){
    //
  }else{
    errCount++;
    console.log(o);
  }
});
//console.log("errCount: %s", errCount);

var fd = fs.openSync(path_to, 'a');
var data = JSON.stringify(res);
fs.writeSync(fd, data);
