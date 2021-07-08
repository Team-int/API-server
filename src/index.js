const db = require('./util/db')
const app = require('fastify').default({
	logger: true,
})

let port = process.env.PORT || 3000
let domain = process.env.DOMAIN || '0.0.0.0'

db.connect().then(() => {
	app.register(require('fastify-cors'))
	app.register(require('./routes/v1'), {prefix: '/v1'})
	app.register(require('./routes/v2'), {prefix: '/v2'})
	
	app.listen(port, domain,(err, addr) => {
		if (err)	throw err
	  console.log(`[Team Int] Joined to API Server`, addr)
	})
})
