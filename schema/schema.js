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

  type Mutation {
    addEchange(
      nom: String
      contact: String
      nom_kilalao: String
      photos: String
      atakalo: String
    ): Echange
    desactivateEchange(id_echange: Int, statut: Boolean): Echange
  }
 

`;

const resolvers = {
  Query: {
    echanges: (_parent, _args, _context) => {
      return prisma.echange.findMany({
        where: {
          statut: true,
        },
      });
    },
  },

  Mutation: {
    addEchange: (_parent, _args, _context) => {
      return prisma.echange.create({
        data: _args,
      });
    },
    desactivateEchange: (_parent, { id_echange }, _context) => {
      let etat = false;
      return prisma.echange.update({
        where: { id_echange },
        data: {
          statut: etat,
        },
      });
    },
  },
};

module.exports = makeExecutableSchema({
  resolvers,
  typeDefs,
});
