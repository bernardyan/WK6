import express from 'express';
import graphqlHTTP from 'express-graphql'
import resolvers from './graphql/resolvers'
import schema from './graphql/schema'


const app = express();
app.use(express.json());

app.use('/api/graphql', graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
}));


const staticRoute = express.static('static');
app.use('/static', staticRoute);
app.use('/', staticRoute);

export default app;