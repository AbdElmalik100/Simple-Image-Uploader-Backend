import Images from "../models/images.js";

export const uploadImage = async (req, res) => {
    try {
        const protocol = req.headers["x-forwarded-proto"] || req.protocol;
        const baseUrl = `${protocol}://${req.get("host")}`

        const data = {
            image: req.file,
            path: `${baseUrl}/${req.file.destination}${req.file.filename}`
        }

        const image = new Images(data)
        await image.save()

        return res.status(201).json(image)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const downloadImage = async (req, res) => {
    try {
        const params = req.params

        return res.download(`uploads/${params.filename}`, error => {
            return res.status(500).json(error)
        })
    } catch (error) {
        return res.status(404).json(error)
    }
}

export const getImage = async (req, res) => {
    try {
        const params = req.params

        const image = await Images.findById(params.id)

        return res.status(200).json(image)
    } catch (error) {
        return res.status(404).json(error)
    }
}
