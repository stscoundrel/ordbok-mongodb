const { MongoClient } = require('mongodb')

/**
 * Setup DB & Collection.
 */
const setupDB = async ({ url, dbName, collectionName }) => {
  const client = await MongoClient.connect(url, { useUnifiedTopology: true })
  const collections = await client.db(dbName).listCollections().toArray()

  const hasCollection = collections.filter((collection) => collection.name === collectionName)

  if (hasCollection.length === 0) {
    await client.db(dbName).createCollection(collectionName)
  }

  return client
}

/**
 * Populate DB with dictionary entries.
 */
const populateDB = async (client, config, words) => {
  const { dbName, collectionName } = config

  await client.db(dbName).collection(collectionName).insertMany(words)
}

module.exports = {
  setupDB,
  populateDB,
}
