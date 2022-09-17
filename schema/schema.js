const { makeExecutableSchema } = require("@graphql-tools/schema");

const pkg = require("@prisma/client");
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const typeDefs = `
  type Echange {
    id_echange: Int
    nom: String
    contact: String
    nom_kilalao: String
    photos: String
    atakalo: String
    statut: Boolean
  }

 
  type Query {
    echanges: [Echange!]!
  }
 

`;

const resolvers = {
  Query: {
    echanges: (_parent, _args, _context) => {
      return prisma.echange.findMany();
    },
  },
};

module.exports = makeExecutableSchema({
  resolvers,
  typeDefs,
});
