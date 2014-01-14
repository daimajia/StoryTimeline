var path = require('path');

var rootPath = path.resolve(__dirname,'../'),
    modelsPath = path.join(rootPath,'/models'),
    routesPath = path.join(rootPath,'/routes');

var paths = {
        "rootPath"      :       rootPath,
        "modelsPath"    :       modelsPath,
        "routesPath"    :       routesPath
    };

module.exports  =  paths;
