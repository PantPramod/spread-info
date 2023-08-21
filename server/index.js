import  express  from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import allRoutes from './routes/index.js'
import errorHandler from "./middleware/ErrorHandler.js";
import connectDB from "./helper/Connectdb.js";
const PORT = process.env.PORT || 8000

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

connectDB(process.env.DB_URI);

app.use("/api",allRoutes)

app.get("*", (req, res, next) => {
    if(req.url==="/"){
        res.send("You are on Backend ")
    }
    res.status(404)
    throw new Error("Not Found");
  });

  app.use(errorHandler)






app.listen(PORT, ()=>console.log(`Server listening on PORT: ${PORT}`))