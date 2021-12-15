const express = require('express');
const app = express();
const { MongoClient, ObjectId } = require('mongodb')

const connectToDatabase = async () => {
    const { MONGO_SECRET_ARN, MONGO_DATABASE, MONGODB_CA_PATH, MONGO_HOST, MONGO_USERNAME, MONGO_PASSWORD, MONGO_PORT, ECHO_CACHE_DB_CONNECTION } = process.env
    const config = {}
    let mongoUrl = ''
    let mongoDbName = ''
    mongoUrl = `mongodb://root:root@localhost:27017`
    mongoDbName = "aicc-db"
    const dbConnection = await MongoClient.connect(mongoUrl, config)
    dbConnection.on('close', () => {
      console.log(`Disconnected from ${mongoDbName}`)
    })
    return dbConnection.db(mongoDbName)
  }

app.get("/", async (req, res) => {
    try {
        let family;
        let familyId;
        let category;
        const db = await connectToDatabase();
        let fieldList = { family, familyId, category }
        let fieldProjection = {}
        for (key in fieldList) {
            fieldProjection[key] = 1
        }
        const result = await db.collection('families').find({}, {projection: fieldProjection}).toArray()
        res.json(result)
    } catch(e) {
        res.send("error message: " + e)
    }
})

app.listen(3000, () => console.log('Listening on port 3000.'));

