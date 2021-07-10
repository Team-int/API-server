const { db } = require('../../../../util/db')

/**
 * @type {import('fastify').FastifyPluginCallback}
 */
 const userStockRoute = async (fastify, opts, done) => {
    fastify.get('/:uid', async (req, res) =>{ 
        const { uid } = req.params

        if (!uid)
            res.status(404).send({
                code: 404,
                message: 'Not found.'
            }) 
        const user = await db.user.findOne({_id: uid})
        if (!user)
            res.status(404).send({
                code: 404,
                message: 'Not found.'
            })


        return user.stock || {}
    })
    
    done()
}
  
module.exports = userStockRoute