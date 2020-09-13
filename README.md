# Orðbók MongoDB

[Old Norse](https://en.wikipedia.org/wiki/Old_Norse) dictionary for Node.js. MongoDB implementation.

Uses [Orðbók](https://github.com/stscoundrel/old-norse-ordbok) for dictionary data.


### Install

`yarn add ordbok-mongodb`

### Usage

Set up the database:

```javascript
const { toMongoDB } = require('ordbok-mongodb')

// Your MongoDB config.
const config = {
  url: '', // Your connection string.
  dbName: 'yourDBName', // Created if new.
  collectionName: 'yourCollectionName', // Created if new.
}

// Run only once to create & populate the database.
const res = await toMongoDB(config)
console.log(res)
```

Query the database:

```javascript
const { getCollection } = require('ordbok-mongodb')

// Your MongoDB config.
const config = {...}

/**
 * Get collection & client instance.
 * You can also do it yourself without Orðbók.
 */
const { collection, client } = await getCollection(config)

// Any valid MongoDB query.
const wordsStartingWithS = await collection.find({ startsWith: 's' }).toArray()

console.log(wordsStartingWithS)
```

Schema for word entries:

```javascript
{
    word: String,
    definition: String,
    type: String,
    gender: String,
    branch: String,
}
```

### Sources

Scraped from word list compiled by [Vikings of Bjornstad](https://www.vikingsofbjornstad.com/Old_Norse_Dictionary_E2N.shtm). The sources for the compiled list come from:

- A. Richard Diebold Center for Indo-European Language and Culture, Linguistics Research Center, The University of Texas at Austin, Old Norse Online Base Form Dictionary, Jonathan Slocum and Todd B. Krause, http://www.utexas.edu/cola/depts/lrc/eieol/norol-BF.html
- E.V. Gordon, An Introduction to Old Norse, Oxford University Press; 2 edition (July 23, 1981), ISBN 9780198111849
- Jesse L. Byock, Viking Language 1, Jules William Press, © 2013, ISBN 9781480216440
- Ross G. Arthur, English-Old Norse Dictionary, www.yorku.ca/inpar/language/English-Old_Norse.pdf
- Jackson Crawford, YouTube Old Norse lecture series, Instructor of Nordic Studies and Nordic Program Coordinator, University of Colorado, Boulder
- Regia Anglorum: Mik Lawson: miklawson@yahoo.co.uk, http://www.mun.ca/mst/heroicage/issues/8/sayers.html
- The Society for Creative Anachronism: http://www.housebarra.com/EP/ep04/12norsecurse.html
- https://www.vikingeskibsmuseet.dk/en/professions/education/knowledge-of-sailing/the-ships-crew/crewmembers-in-the-viking-age/barber-surgeon
