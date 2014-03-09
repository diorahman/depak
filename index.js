// module dependencies
var lineReader = require('line-reader');
var PStrScan = require('pstrscan');
var events = require('events');
var util = require('util');

var Depak = function(){
  events.EventEmitter.call(this);
}

util.inherits(Depak, events.EventEmitter)


Depak.prototype.parse = function(filename) {
  
  var self = this;

  var p = [];
  var pack = [];
  var lastKey = '';
  var lastObj = null;

  lineReader.eachLine(filename, function(line, last) {

    var scan = new PStrScan(line);
    var key = scan.scan(/[A-Z][-0-9A-Za-z]*[0-9A-Za-z]/);

    if (key) {

      scan.skip(/\s*:\s*/);
      var val = scan.scan(/.*$/);
      var obj = {};

      if (val.length == 0) {
        val = [];
      }

      obj[key] = val;

      lastKey = key;
      lastObj = obj;

      p.push(obj);

    } else if (lastKey && lastObj) {

      if (typeof lastObj[lastKey] == 'object') {
        lastObj[lastKey].push(line.trim());
      }
      else {
        lastObj[lastKey] += line;
      }
    }

    if (line.trim().length == 0 || last) {

      if (p.length > 0) {

        var pObj = {};
        
        for(var i = 0; i < p.length; i++){

          var k = Object.keys(p[i])[0];
          var v = (p[i])[k];
          pObj[k] = v;

        }

        p = [];
        pack.push(pObj);
        self.emit('data', pObj);
      }
    }

    if (last) {
      self.emit('end', pack);
    }
    scan = null;
  })
}

// expose Depak
module.exports = Depak;



