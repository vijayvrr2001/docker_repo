var _ = require('lodash');

module.exports = function(app) {
    _cats = [];

    /*create*/
    app.post('/cat', function(req,res){
        _cats.push(req.body);
        res.json({info:'cat created successfully'});
    });

    /*read*/
    app.get('/cat', function(req,res){
        res.send(cats);
    });

};