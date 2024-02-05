const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { importSchema } = require('graphql-import');
const resolvers = require('./resolvers');
const sequelize = require('./db/database');
const path = require('path');

// Import your schema from SDL file
const typeDefs = importSchema(path.join(__dirname, 'schema', 'post.graphql'));

// Create a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();

// Mount GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true, // enables the GraphiQL interface
}));

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Sync Sequelize models with the database
sequelize.sync().then(() => {
  console.log('Database synced successfully.');
}).catch(err => {
  console.error('Unable to sync database:', err);
});
