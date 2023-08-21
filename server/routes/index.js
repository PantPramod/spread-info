import express from 'express'
import userRouter from './User.js'
import infoRouter from './info.js'

const router = express.Router()

router.use('/user', userRouter)

router.use('/info', infoRouter)

export default router
