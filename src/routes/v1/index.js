/**
 * @type {import('fastify').FastifyPluginCallback}
 */
const routes = async (fastify, opts, done) => {
    fastify.register(require('./stock/'), { prefix: '/stock' })
    fastify.register(require('./shop/'), { prefix: '/shop' })

    done()
}
  
module.exports = routes