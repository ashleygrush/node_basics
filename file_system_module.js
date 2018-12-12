// returns all information on file
const fs = require('fs');

// use asyncronus methods - non-blocking
// readdir = reads all files within the directory (./ = current folder).
// needs to check for call-back (error or result)
const files = fs.readdir('./', function(err, files) {
  // if error is found, print out results
  if (err) console.log('Error: ', err);
  else console.log('Result: ', files);
});
