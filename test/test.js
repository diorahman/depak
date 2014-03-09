var Depak = require ('../');
var release = __dirname + "/data/Release.dummy";
var packages = __dirname + "/data/Packages.dummy";

describe('Depak', function(){

  it ('should parse Release file', function (done) {

    var depak = new Depak();

    depak.on ('data', function (data) {
      data['Origin'].should.eql('Debian', 'this is debian sir!');
    });

    depak.on ('end', function (data) {
      data.length.should.eql(1, 'we should\'ve only one member');
      done();
    });

    depak.parse (release);

  });

  it ('should parse Packages file', function (done) {

    var depak = new Depak();

    depak.on ('data', function (data) {
      (Object.keys(data)[0]).should.eql('Package', 'the first key should be "Package"');
    });

    depak.on ('end', function (data) {
      data.length.should.eql(4, 'the number of packages is 4');
      done();
    });

    depak.parse (packages);

  });
});
