# Depak

JSONify debian repository index files (Releases, Packages, Sources)

Example:

```js

  var depak = new Depak();

  depak.on ('data', function (data) {
    // return each data token
  });

  depak.on ('end', function (data) {
    // return the summary of parsing data
  });

  depak.parse (__dirname + '/test/data/Release.dummy');

```

```js

  var depak = new Depak();

  depak.on ('data', function (data) {
    // return each data token
  });

  depak.on ('end', function (data) {
    // return the summary of parsing data
  });

  depak.parse (__dirname + '/test/data/Package.dummy');

```

# License 

MIT