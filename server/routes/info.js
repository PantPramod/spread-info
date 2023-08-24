import express from 'express'
import BusinessCard from '../modal/BusinessCard.js'
import asyncHandler from 'express-async-handler'

const router = express.Router()


router.get('/', asyncHandler(async (req, res) => {
    const allCards = await BusinessCard.find({})
    res.send(allCards)
}))

router.get("/:id", asyncHandler(async (req, res) => {
    const isCard = await BusinessCard.findById(req.params.id)
    res.send(isCard)
}))

router.post('/', asyncHandler(async (req, res) => {
    const newCard = await BusinessCard.create(req.body)
    res.send(newCard)
}))

router.get("/userid/:id", asyncHandler(async (req, res) => {
    const cards = await BusinessCard.find({ userId: req.params.id })
    res.send(cards)
}))


export default router
