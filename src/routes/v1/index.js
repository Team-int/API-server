const routes =
/**
 * 
 * @param {import('fastify').FastifyInstance} fastify 
 * @param {*} options 
 */
async (fastify, options) => {
    fastify.get('/stock', require('./stock'))
    fastify.get('/stock/:code', require('./stock/[code]'))
}
  
module.exports = routes