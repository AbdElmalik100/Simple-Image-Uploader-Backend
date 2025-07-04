import express from 'express'
import { uploadImage, downloadImage, getImage } from '../controllers/images.js'
import upload from '../middlewares/multer.js'

const router = express.Router()

router.route("/upload")
    .post(upload.single('image'), uploadImage)

router.route("/download/:filename")
    .get(downloadImage)

router.route("/images/:id")
    .get(getImage)

export default router