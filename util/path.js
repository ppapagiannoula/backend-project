const path = require('path');

//module.exports = path.dirname(process.mainModule.filename); Deprecated
module.exports = path.dirname(require.main.filename); //Finds the root folder of the project