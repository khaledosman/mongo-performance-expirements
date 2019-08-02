# mongo-performance-expirements
Testing different ways of optimizing MongoDB queries with Mongoose

# Running the script
`mongod`
`npm install`
`yarn start`

# Sample output result
cleaning db
db cleaned
adding 100000 users to the database
finished populating the database with 100000 users
default_query: 1868.893ms
query_with_index: 2031.596ms
query_with_select: 1459.995ms
query_with_select_index: 1130.273ms
lean_query: 602.460ms
lean_with_index: 610.920ms
lean_with_select: 245.496ms
lean_select_index: 285.485ms
