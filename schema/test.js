const { makeExecutableSchema } = require("@graphql-tools/schema");
const { GraphQLUpload, gql } = require("apollo-server-express");
const path = require("path");
const fs = require("fs");

const pkg = require("@prisma/client");
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const typeDefs = gql`
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

  scalar FileUpload

  type FieldUpload {
    url: String!
  }

  type Mutation {
    addphoto(file: FileUpload!): FieldUpload!
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

  FileUpload: { GraphQLUpload },

  Mutation: {
    addphoto: async (parent, { file }) => {
      const { createReadStream, filename, mimetype } = await file;
      const location = path.join(__dirname, `./uploads/${filename}`);
      const myfile = createReadStream();

      await myfile.pipe(fs.createWriteStream(location));
      return {
        url: `http://localhost:4000/images/${filename}`,
      };
    },

    addEchange: async (
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
