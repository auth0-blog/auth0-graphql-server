## Auth0 GraphQL Server

This server was created with Express and `express-graphql-middleware` and uses a mock MongoDB instance to collect data from. Also, JWTs are used for authentication.

### Getting started

Before using this project you need to create an Auth0 account, which you can create [here](https://auth0.com/signup). 


To run this application you need to clone it on your local machine, and move into the directory that you cloned it to afterwards. In this directory you need to create a new file called `.env` and add your Auth0 information to it like this:

```
// .env
AUTH0_DOMAIN = <YOUR_AUTH0_DOMAIN>
API_IDENTIFIER = <YOUR_API_IDENTIFIER>
```

After creating this file you can run the following commands to start the GraphQL server:

```
yarn && yarn start
```

### Questions

If you have any questions drop me a message on Twitter: [@gethackteam](https://twitter.com/gethackteam)