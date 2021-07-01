const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let Router = require('./routes');


app.use('/v1', Router.v1);

app.get('/', async (req, res) =>{
	res.send({
		code: 200,
		message: 'Hello, World'
	})
});

app.listen(3000, () => {
  console.log(`[Team Int] Joined to API Server`)
})