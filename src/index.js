const db = require('./util/db')
const app = require('fastify').default({
	logger: true,
})


db.connect().then(() => {
	app.get('/intbot/v1/stock/:code', async (req, reply) => {
		reply.header('Access-Control-Allow-Origin', '*')
		const { code } = req.params
	
		if (!code)
			reply.status(404).send({
				code: 404,
				message: 'Not found.'
			})
		const stock = await db.db.stock.findOne({code})
		if (!stock)
			reply.status(404).send({
				code: 404,
				message: 'Not found.'
			})

		return stock
	})
	
	app.get('/', async (req, reply) =>{
		reply.status(200)
		return {
			status: 'Good'
		}
	})
	
	app.listen(3000, () => {
	  console.log(`[Team Int] Joined to API Server`)
	})
})
