import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import BirthDay from '../modal/BirthdayCard.js'

const router = express.Router()

router.post('/', expressAsyncHandler(async (req, res) => {
    const newCard = await BirthDay.create(req.body);
    res.status(201).send(newCard)
}))

router.get('/userid/:userId', expressAsyncHandler(async (req, res) => {
    const allCards = await BirthDay.find({ userId: req.params.userId })
    res.status(200).send(allCards)
}))

router.get('/:id', expressAsyncHandler(async (req, res) => {
    const particularcard = await BirthDay.findById(req.params.id)
    res.status(200).send(particularcard)
}))

export default router