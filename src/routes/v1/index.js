const stockRoute = require('./stock')

/**
 * @type {import('fastify').FastifyPluginCallback}
 */
const routes = async (fastify, opts, done) => {
    fastify.register(stockRoute, { prefix: '/stock' })

    done()
}
  
module.exports = routes