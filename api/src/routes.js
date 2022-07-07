import express from 'express'
import ctrlUsers from './users/user.controllers'
import ctrlBooks from './books/book.controllers'

const router = express.Router()

//Users
router.get('/users/', ctrlUsers.get)
router.get('/user/:id/', ctrlUsers.getById)
router.post('/user/', ctrlUsers.post)
router.put('/user/:id/', ctrlUsers.update)
router.delete('/user/:id/', ctrlUsers.delete)

//Books
router.get('/books/', ctrlBooks.get)
router.get('/book/:id/', ctrlBooks.getById)
router.post('/book/', ctrlBooks.post)
router.put('/book/:id/', ctrlBooks.update)
router.delete('/book/:id/', ctrlBooks.delete)

export default router 