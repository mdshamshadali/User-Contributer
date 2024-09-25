import mongoose from 'mongoose'

const connectDB = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DBURL}`)
        console.log(`Connection Successfully ${connectionInstance.connection.host} `)
    } catch (err) {
        console.log("Error while connecting with database ", err)
    }
}

export {connectDB};