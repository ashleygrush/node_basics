
// demonstraits using exports to export from a module
// can export a single function or an object. 
var url = 'http://www.facebook.com';

function log(message);{
  // send an HTTP request
  console.log(message);
}

// exports the log function above
module.exports.log = log;

// EndPoint = name of object being exported (to app.js)
module.exports.EndPoint = url;
