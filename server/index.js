//import libraries
import express from 'express'
import dotenv from 'dotenv'
import './config/db.js'
import cors from 'cors'
import {Router} from './routes/routes.js'

//setting up express
const app=express()

//allow app to parse json bodies
app.use(express.json())

app.use(cors())

//configuring env file
dotenv.config({path:"./config/.env"})

app.use('/contactmsyt',Router)

/*accessing the port number and starting the server*/
app.listen(process.env.PORT,()=>{
    console.log("App is Running")
})