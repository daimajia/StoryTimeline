var express =   require('express');
var path    =   require('path');

var app     =   express();

app.set('secret','daimajia');

//NODE_ENV=production node index.js
//share environment
app.configure(function(){
    app.set('views',path.join(__dirname,'views'));
    app.use(express.favicon());
    app.use(express.logger());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser(app.get('secret')));
    app.use(express.session({secret:app.get('secret')}));
    app.use(app.router);
});

//development environment
app.configure('development',function(){
    app.use(express.static(path.join(__dirname,'public')));
    app.use(express.errorHandler({dumpExceptions:true,showStack:true}));
});

//production environment
app.configure('production',function(){
    var oneYear = 31557600000;
    app.use(express.static(path.join(__dirname,'public'),{maxAge:oneYear}));
    app.use(express.errorHandler());
});

app.get('/',function(req,res){
    res.send('Hello NODE');
});

app.listen(3000);
console.log('listing 3000');
