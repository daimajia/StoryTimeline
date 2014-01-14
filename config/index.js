var path = require('path'),
    paths = require('./paths');

//config express adn return a config object
function configExpress(express,app,type){
    app.set('secret','daimajia');
    //environment setting
    app.configure(function(){
        app.set('views',path.join(paths.rootPath,'views'));
        app.use(express.favicon());
        app.use(express.logger());
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(express.cookieParser(app.get('secret')));
        app.use(express.session({secret:app.get('secret')}));
        app.use(app.router);
        if(type === 'development'){//development environment
            app.use(express.static(path.join(paths.rootPath,'public')));
            app.use(express.errorHandler({dumpExceptions:true,showStack:true}));
        }else if(type === 'production'){//production environment
            var oneYear = 31557600000;
            app.use(express.static(path.join(paths.rootPath,'public'),{maxAge:oneYear}));
            app.use(express.errorHandler());
        }else{
            console.log('error config type');
        }
    });
    return config();
}

function config(){
    return {
        paths:paths
    }
}

module.exports = config;
module.exports.setup = configExpress;
