var router = require('tiny-router');

router.get('/', function(req, res){
	res.send('Reply from the webserver');
})

router.get('/stelios', function(req, res){
	res.send('This is Stelios Issaias private area');
})

router.listen(8080);