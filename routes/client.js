var client  =   require('../controllers/client'),
    config  =   require('../config'),
    middleWare    =   require('../middleware');

module.exports  =   function(app){
    app.get('/login/',admin.login);
    app.get('/logout',admin.logout);
}
