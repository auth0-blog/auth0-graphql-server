const { MongoMemoryServer } = require('mongodb-memory-server');
const { MongoClient } = require('mongodb');

let database = null;

async function startDatabase() {
  const mongo = new MongoMemoryServer();
  const mongoDBURL = await mongo.getConnectionString();
  const connection = await MongoClient.connect(mongoDBURL, {
    useNewUrlParser: true,
  });
  database = connection.db();

  await database.collection('events').insertMany([
    {
      id: 1,
      title: 'GraphQL Introduction Night',
      description: 'Introductionary night to GraphQL',
      date: '2019-11-06T17:34:25+00:00',
      attendants: [
        {
          id: 1,
          name: 'Peter',
          age: 34,
        },
        {
          id: 2,
          name: 'Kassandra',
          age: 23,
        },
      ],
    },
    {
      id: 2,
      title: 'GraphQL Introduction Night #2',
      description: 'Introductionary night to GraphQL',
      date: '2019-11-06T17:34:25+00:00',
      attendants: [
        {
          id: 3,
          name: 'Kim',
          age: null,
        },
      ],
    },
  ]);

  return database;
}

module.exports = startDatabase;
