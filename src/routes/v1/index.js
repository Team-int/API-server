/**
 * @type {import('fastify').FastifyPluginCallback}
 */
const routes = async (fastify, opts, done) => {
    fastify.register(require('./stock/'), { prefix: '/stock' })

    done()
}
  
module.exports = routes