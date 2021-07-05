const db = require('./util/db')
const app = require('fastify').default({
	logger: true,
})

db.connect().then(() => {
	app.register(require('fastify-cors'))
	app.register(require('./routes/v1'), {prefix: '/v1'})
	app.register(require('./routes/v2'), {prefix: '/v2'})
	
	app.listen(4000, (err, addr) => {
		if (err)	throw err
	  console.log(`[Team Int] Joined to API Server`, addr)
	})
})