const { ApolloServer, gql} = require('apollo-server');



const typeDefs = gql`
type Sign {
    id: ID!
    content: String!
    nickname: String!
    country: String
  }
  
  type Query {
    signs: [Sign]
  }
  
  input SignInput {
    content: String!
    nickname: String!
    country: String
  }
  
  type Mutation {
    addSign(input: SignInput): Sign
  }

  `;

let signs = [];

const resolvers = {
    Query: {
        signs: () => signs,
    },
    Mutation: {
        addSign: (_, {input}) => {
            const sign = {id: signs.length +1, ...input};
            signs.push(sign);
            return sign;
        },
    },
};

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(( {url }) => {
    console.log(`Server gotowy na ${url} `)
});