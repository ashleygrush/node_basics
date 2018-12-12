// returns information on the current operating system
 const os = require('os');

 var totalMemory = os.totalmem();
 var freeMemory = os.freemem();
 var userInfo = os.userInfo();

 // console.log('Total Memory: ' + totalMemory);

// template to insert argument (totalMemory object)
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
console.log(`User Info: ${userInfo}`);
