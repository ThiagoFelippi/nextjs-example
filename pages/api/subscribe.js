import { MongoClient } from "mongodb"

const connectToDatabase = async (uri) => {
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const database = client.db("news")
  return database
}

const subscribeUser = async (req, res) => {
  const { email } = req.body
  
  if(!email){
    res.statusCode = 400
    res.json({ error: "Please, " })
  }

  const uri = process.env.MONGODB_URI
  const database = await connectToDatabase(uri)
  const collection = database.collection("subscribers")

  collection.insertOne({
    email,
  })

  res.statusCode = 200
  res.json({ email })
}

export default subscribeUser