/*
* File: api.js
* Author: Buglyos Attila
* Copyright: 2026, Buglyos Attila
* Group: Szoft II/E
* Date: 2026.03.09
* Github: https://github.com/Buglyos/
* Licenc: MIT
*/


import Router from 'express'
const router = Router()

import AuthController from '../controllers/authController.js'
import UserController from '../controllers/userController.js'
import verifyToken from '../middleware/authjwt.js'

import TeamController from '../controllers/teamsController.js'
import MemberController from '../controllers/membersController.js'


router.post('/register', AuthController.register)
router.post('/login', AuthController.login)


router.get('/users',  UserController.index)
router.get('/users/:id', UserController.show)
router.put('/users/:id/password',UserController.updatePassword)
router.delete('/users/:id',UserController.destroy)


router.get('/teams',TeamController.index)
router.get('/teams/:id',TeamController.show)
router.post('/teams',TeamController.store)
router.put('/teams/:id',TeamController.update)
router.delete('/teams/:id',TeamController.destroy)


router.get('/members',  MemberController.index)
router.get('/members/:id', MemberController.show)
router.post('/members',MemberController.create)
router.put('/members/:id', MemberController.update)
router.delete('/members/:id', MemberController.destroy)

export default router
