# Ndao_atakalo_wcc_s3_dev-

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

# Usage

### Adding new exchange

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

### Querying

You can pass many parameters as you want to pass, there are the available parameters:

```sh
query{
  echanges{
    nom,
    nom,
    contact,
    nom_kilalao,
    atakalo,
    photos
  }
}
```

### Response

Depending on the parameters you send, the API returns the desired responses. It shows only the actives exchanges.
Example of an response:

```json
{
  "data": {
    "echanges": [
      {
        "nom": "Koto",
        "contact": "03500000000",
        "nom_kilalao": "papango",
        "atakalo": "kalesy",
        "photos": "urlphoto"
      }
    ]
  }
}
```

### Desactivate an exchange

To desactivate an exchange, pass the ID of the exchange you want to desactivate as follows:

```sh
mutation{
  desactivateEchange(id_echange:n){
    id_echange
  }
}
```

Replace the `n` to the ID you want to pass.
