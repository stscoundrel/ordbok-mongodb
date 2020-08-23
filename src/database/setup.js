const { MongoClient } = require('mongodb')

/**
 * Setup DB & Collection.
 */
const setupDB = async ({ url, dbName, collectionName }) => {
  const client = await getClient(url)
  const collections = await client.db(dbName).listCollections().toArray()

  const hasCollection = collections.filter((collection) => collection.name === collectionName)

  // Create collection, if not exists.
  if (hasCollection.length === 0) {
    await client.db(dbName).createCollection(collectionName)
  }

  return client
}

/**
 * Get DB client instance.
 */
const getClient = async (url) => {
  const client = await MongoClient.connect(url, { useUnifiedTopology: true })

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
  getClient,
  populateDB,
}
