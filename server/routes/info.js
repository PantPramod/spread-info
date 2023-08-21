import express from 'express'
import BusinessCard from '../modal/BusinessCard.js'

const router = express.Router()


router.get('/', async (req, res) => {
    try {
        const allCards = await BusinessCard.find({})
        res.send(allCards)
    } catch (err) {
        res.status(500);
        throw new Error("DB_ERROR")
    }

})

router.get("/:id", async (req, res) => {
    try {
        const isCard = await BusinessCard.findById(req.params.id)
        res.send(isCard)
    } catch (err) {
        res.status(500);
        throw new Error("DB_ERROR")
    }

})

router.post('/', async (req, res) => {
    try {
        const newCard = await BusinessCard.create(req.body)
        res.send(newCard)
    } catch (err) {
        res.status(500);
        throw new Error("DB_ERROR")
    }

})


export default router
