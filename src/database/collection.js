const { getClient } = require('./setup.js')

/**
 * Get collection instace for queries.
 */
const getCollection = async ({ url, dbName, collectionName }) => {
  const client = await getClient(url)
  const collection = client.db(dbName).collection(collectionName)

  return { client, collection }
}

module.exports = {
  getCollection
}