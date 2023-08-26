import express from 'express'
import userRouter from './User.js'
import infoRouter from './info.js'
import birthdayRouter from './birthday.js'
import resumeRouter from './resume.js'

const router = express.Router()

router.use('/user', userRouter)

router.use('/info', infoRouter)

router.use('/birthday', birthdayRouter)

router.use('/resume', resumeRouter)

export default router
