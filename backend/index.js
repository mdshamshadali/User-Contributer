import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose';


const app = express();
dotenv.config({
    path:'./.env'
})

app.use(express.json())
app.use(cors());

const url = process.env.DBURL

mongoose.connect(url).then(() => {
    console.log(`Connection Succssfully`);
}).catch(() => console.log(`Not Connected`))


app.get('/',(req, res)=>{
    res.send("Hello everyone")
})

const PORT = 8000 || process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})
