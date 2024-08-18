import mongoose from "mongoose"


export async function connection() {
    try {
        console.log(process.env.MONGO_URL!)
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection

        connection.on('connection' , () => {console.log("DB connected")})
        connection.on('error' , (err) => {console.log("DB not connected. ERROR: ", err); process.exit()})
          
    } catch (error) {
        console.log("something wrong : ", error)
    }
}