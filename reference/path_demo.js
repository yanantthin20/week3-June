const path = require('path');

//Base file naeme
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

//Create path Object
console.log(path.parse(__filename).base);

// Concatenate paths
//../test/hello.html
console.log(path.join(__dirname,'test','hello.html'));