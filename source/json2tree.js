var fs = require('fs');
var _ = require('underscore');

var path_from ='../data/plain.json';
var path_to ='../data/tree.json';

var ds=fs.readFileSync(path_from).toString();
console.log(ds);
var da=JSON.parse(ds);
//var da=require(path_from);

var prov = _.filter(da, function(item){
    var s=item.code;
    return s.substr(2,4)=='0000';
});

var city = _.filter(da, function(item){
    var s=item.code;
    return s.substr(2,2)!='00' && s.substr(4,2)=='00';
});

var zone = _.filter(da, function(item){
    var s=item.code;
    return s.substr(4,2)!='00';
});

var zone_g = _.groupBy(zone, function(item){
    return item.code.substr(0,4);
});

// zone_g_p
_.each(zone_g, function(o, key, list){
    list[key] = _.reduce(o, function(memo, oo){
        memo.push(oo.name);
        return memo;
    }, []);
});

_.each(city, function(item,key,list){
    var _key = item.code.substr(0,4);
    item.sub = zone_g[_key]||[];
});

var city_g=_.groupBy(city,function(item){return item.code.substr(0,2)});

_.each(prov, function(item,index,list){
    var _key = item.code.substr(0,2);
    item.sub = city_g[_key];
});

var res = prov;

var fd = fs.openSync(path_to, 'a');
var data = JSON.stringify(res);
fs.writeSync(fd, data);
