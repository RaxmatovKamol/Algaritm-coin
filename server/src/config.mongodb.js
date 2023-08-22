const { MongoClient, ServerApiVersion } = require('mongodb');
const password = process.env.MONGODB_PASSWORD;
const username = process.env.MONGODB_USERNAME;

const uri = `mongodb+srv://${username}:${password}@coin.gisd6dw.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

(async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    console.log("Error connecting to Mongodb Atlas");
  }
})();

const db = client.db("Coin");
module.exports = db;
