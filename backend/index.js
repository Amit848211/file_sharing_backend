import express from "express"
import cors from "cors"
import router from "./routes/routes.js"
import { connectDB } from "./database/db.js"


const app =express()
 app.use(express.json())
 app.use(cors())
app.use("/",router)

connectDB()

app.listen(5000,()=>{
    console.log("app is running on port no 5000");
})