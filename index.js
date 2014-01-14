var express =   require('express');
var app     =   express();
var config  =   require('./config').setup(express,app,'development');

app.get('/',function(req,res){
    res.send('Hello NODE');
});

app.listen(3000);
console.log('listing 3000'+ config.paths.modelsPath);
