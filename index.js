const router = require('tiny-router');
const chalk = require('chalk');

//Setup loggin
const info = chalk.bold.cyan;

router.get('/', (req, res) => {
	res.send('Reply from the webserver')
	console.log(info('Request for /'))
})

router.get('/stelios', (req, res) => {
	res.send('This is Stelios Issaias private area')
	console.log(info('Request for /stelios'))
})

router.listen(8080);