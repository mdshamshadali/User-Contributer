import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from './DB/index.js';


const app = express();
dotenv.config({
    path:'./.env'
})

app.use(express.json())
app.use(cors());

connectDB()

app.get('/',(req, res)=>{
    res.send("Hello everyone")
})

const PORT = 8000 || process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})
