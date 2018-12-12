// returns untilites of the file path
const path = require('path');

// parse returns an object from the path string
var pathObj = path.parse(__filename);

console.log(pathObj);
