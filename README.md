# ndao_atakalo_wcc_s3_dev-

Ndao atakalo api with graphql

## Installation

Clone this repository to your computer

Install all dependancies using `npm install`

## Setting up the database

To the project folder, run

### `npx prisma migrate dev`

Now the database is created

## Launching the application

Run this command:

### `nodemon app.js`

### Querying

# Adding new exchange

Example of creating an new exchange:

```sh
mutation {
    addEchange(nom:"Koto"­,
    contact:"03500000000"­,
    nom_kilalao:"papango",
    atakalo:"kalesy"­,
    photos:"urlphoto")
    {
        nom,
        contact,
        nom_kilalao,
        atakalo,
        photos
    }
}
```
