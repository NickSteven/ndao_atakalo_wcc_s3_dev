const { makeExecutableSchema } = require("@graphql-tools/schema");
const pkg = require("@prisma/client");
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const typeDefs = `
  type Echange {
    id_echange: Int
    nom: String!
    contact: String!
    nom_kilalao: String!
    photos: String!
    atakalo: String!
    statut: Boolean!
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
    addEchange: (
      _parent,
      { nom, contact, nom_kilalao, atakalo, photos },
      _context
    ) => {
      if (
        nom != "" &&
        contact != "" &&
        nom_kilalao != "" &&
        atakalo != "" &&
        photos != ""
      ) {
        if (/^[0-9]+$/.test(contact) && contact.length == 10) {
          return prisma.echange.create({
            data: {
              nom: nom,
              contact: contact,
              nom_kilalao: nom_kilalao,
              atakalo: atakalo,
              photos: photos,
            },
          });
        } else {
          throw Error("numéro nom valide");
        }
      } else {
        throw Error("les champs ne doivent pas être vide");
      }
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
