import mongoose from "mongoose";

const imagesSchema = new mongoose.Schema({
    created_at: {
        type: Date,
        default: new Date()
    },
    image: {
        type: Map,
    },
    path: {
        type: String,
        trim: true
    }
})

const Images = mongoose.model("Images", imagesSchema)

export default Images