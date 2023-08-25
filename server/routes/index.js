import express from 'express'
import userRouter from './User.js'
import infoRouter from './info.js'
import birthdayRouter from './birthday.js'

const router = express.Router()

router.use('/user', userRouter)

router.use('/info', infoRouter)

router.use('/birthday', birthdayRouter)

export default router
