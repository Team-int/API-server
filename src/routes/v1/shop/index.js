const { db } = require('../../../util/db')

/**
 * @type {import('fastify').FastifyPluginCallback}
 */
 const shopRoute = async (fastify, opts, done) => {
    fastify.get('/', async (req, res) =>{ 
        const merches = await db.goods.find().toArray()

        return merches
    })

    fastify.get('/:id', async (req, res) => {
        const { id } = req.params

        if (!id)
            res.status(404).send({
                code: 404,
                message: 'Not found.'
            })
        const merch = await db.goods.findOne({_id: id})
        if (!merch)
            res.status(404).send({
                code: 404,
                message: 'Not found.'
            })
        return merch
    })
    
    done()
}
  
module.exports = shopRoute