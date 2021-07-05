const { db } = require('../../util/db')

/**
 * @type {import('fastify').FastifyPluginCallback}
 */
 const stockRoute = async (fastify, opts, done) => {
    fastify.get('/', async (req, res) =>{ 
        const stock = await db.stock.find().toArray()

        return stock
    })

    fastify.get('/:code', async (req, res) => {
        const { code } = req.params

        if (!code)
            res.status(404).send({
                code: 404,
                message: 'Not found.'
            })
        const stock = await db.stock.findOne({code: String(code).toUpperCase()})
        if (!stock)
            res.status(404).send({
                code: 404,
                message: 'Not found.'
            })

        return stock
    })
    
    done()
}
  
module.exports = stockRoute