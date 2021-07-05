const { config } = require('dotenv')
const MongoDB = require('mongodb')

config()

const DBClient = new MongoDB.MongoClient(
  process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)

module.exports = {
  async connect() {
    const DBServer = await DBClient.connect()
    module.exports.db.user = DBServer.db('intbot').collection('main')
    module.exports.db.goods = DBServer.db('intbot').collection('goods')
    module.exports.db.stock = DBServer.db('intbot').collection('stock')
    module.exports.db.data = DBServer.db('intbot').collection('secrets')
    
    console.log(`[Database] Connected`)
  },
  db: {},
}
