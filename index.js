import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import ImagesRouter from './routes/images.js'
import 'dotenv/config'
import { fileURLToPath } from 'url';
import path, { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = process.env.PORT
const mongooseUrl = process.env.MONGOOSE_URL

const app = express()

app.use(cors())
app.use(express.json())
app.use("/uploads", express.static(path.join(__dirname, 'uploads')))

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to Simple Image Uploaded Back-End App"
    })
})


mongoose.connect(mongooseUrl)
    .then(() => {
        console.log(`MongoDB is running`);
    }).catch(error => {
        console.log(`MongoDB connection error: ${error}`);
    })


app.use("/api", ImagesRouter)


app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})
