const { db } = require("../../../util/db")

const routeHandler = async (req, reply) => {
    const { code } = req.params

    if (!code)
        reply.status(404).send({
            code: 404,
            message: 'Not found.'
        })
    const stock = await db.stock.findOne({code: String(code).toUpperCase()})
    if (!stock)
        reply.status(404).send({
            code: 404,
            message: 'Not found.'
        })

    return stock
}

module.exports = routeHandler