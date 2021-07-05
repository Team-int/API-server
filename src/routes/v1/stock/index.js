const { db } = require("../../../util/db")

const routeHandler = async (req, reply) => {
    const stock = await db.stock.find().toArray()

    return stock
}

module.exports = routeHandler