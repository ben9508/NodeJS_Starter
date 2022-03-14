import express from "express";
import mongoose from "mongoose";
import UserRoute from './routes/userRoutes.js';
import testRoute from './routes/testRoutes.js';
const app = express();
// mongoURI = "mongodb://localhost/dbanme";

const uri = "mongodb://127.0.0.1:27017/testing";

app.use(express.json())
mongoose.connect(uri,  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (error, connect) => {
      if(error) {
        console.error(`MongoDb is not connected ${error}`)
        process.exit()
      } else {
        console.log(`MongoDb is connected`)
      }
})

/* Blocking Calls */
app.use('/user', UserRoute)

/* Non Blocking Calls */
app.use('/test', testRoute)

app.listen(3000, async (req, res) => {
    console.log("Server is listening on port 3000")
})