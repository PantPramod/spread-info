import express from 'express'
import Resume from '../modal/Resume.js'
import asyncHandler from 'express-async-handler'

const router = express.Router()


router.get('/', asyncHandler(async (req, res) => {
    const allResume = await Resume.find({})
    res.send(allResume)
}))

router.get("/:id", asyncHandler(async (req, res) => {
    const isCard = await Resume.findById(req.params.id)
    res.send(isCard)
}))

router.post('/', asyncHandler(async (req, res) => {
    const newCard = await Resume.create(req.body)
    res.send(newCard)
}))

router.get("/userid/:id", asyncHandler(async (req, res) => {
    const cards = await Resume.find({ userId: req.params.id })
    res.send(cards)
}))


export default router
