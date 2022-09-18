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

````sh Example of creating an new exchange:
mutation{
addEchange(nom:"add"­, contact:"0346655203"­, nom_kilalao:"kilalao­", atakalo:"bobotakely"­, photos:"urlphoto")
{
nom,
contact,
nom_kilalao,
atakalo,
photos
}
}```

````
