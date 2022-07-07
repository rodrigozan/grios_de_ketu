import express from 'express'
import crtlUsers from './users/user.controllers'

const router = express.Router()

//Users
router.get('/users/', crtlUsers.get)
router.get('/user/:id/', crtlUsers.getById)
router.post('/user/', crtlUsers.post)
router.put('/user/:id/', crtlUsers.update)
router.delete('/user/:id/', crtlUsers.delete)

export default router 