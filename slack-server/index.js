import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema';
import resolvers from './resolvers';
import db from './models';

const PORT = process.env.PORT || 3000;

const schema = makeExecutableSchema({ typeDefs, resolvers });

const app = express();

const graphqlEndpoint = '/graphql';

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: graphqlEndpoint }));

const listen = () => app.listen(PORT, () => console.log(`slack server listening on port ${PORT}`));
if (process.env.NODE_ENV !== 'production') {
  db.sequelize.sync({ force: true }).then(listen);
} else {
  listen();
}
