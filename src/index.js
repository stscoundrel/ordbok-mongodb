const { setupDB } = require('./database/setup.js')
const dictionary = require('./services/dictionary.js')

const toMongoDB = async (url, dbName, collectionName) => {
  try {
    const client = await setupDB(url, dbName, collectionName)
    const words = await dictionary.getAll()

    await client.db(dbName).collection(collectionName).insertMany(words)

    return { status: true }
  } catch (err) {
    return { status: false, err }
  }
}

module.exports = {
  toMongoDB,
}
