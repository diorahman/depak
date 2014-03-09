# Depak

JSONify debian repository index files (Releases, Packages, Sources)

Examples:

For a Release file:

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

For a Packages file:

```js

  var depak = new Depak();

  depak.on ('data', function (data) {
    // return each data token
  });

  depak.on ('end', function (data) {
    // return the summary of parsing data
  });

  depak.parse (__dirname + '/test/data/Packages.dummy');

```

# License 

MIT