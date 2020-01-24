const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');
const startDatabase = require('./database');
const expressPlayground = require('graphql-playground-middleware-express')
  .default;

// Create a context for holding contextual data
const context = async () => {
  const db = await startDatabase();
  return { db };
};

// Provide resolver functions for your schema fields
const resolvers = {
  events: async (_, context) => {
    const { db } = await context();

    const events = db.collection('events').find();

    return events.toArray();
  },
  event: async ({ id }, context) => {
    const { db } = await context();

    const event = await db.collection('events').findOne({ id });

    return event
  },
  editEvent: async ({ id, title, description }, context) => {
    const { db } = await context();

    return db
      .collection('events')
      .findOneAndUpdate(
        { id },
        { $set: { title, description } },
        { returnOriginal: false },
      )
      .then(resp => resp.value);
  },
};

const app = express();
app.use(
  '/graphql',
  cors(),
  graphqlHTTP(async () => ({
    schema,
    rootValue: resolvers,
    context,
  })),
);
app.get('/playground', expressPlayground({ endpoint: '/graphql' }));
app.listen(4000);

console.log(`🚀 Server ready at http://localhost:4000/graphql`);
