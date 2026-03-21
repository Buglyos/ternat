/*
* File: api.js
* Author: Buglyos Attila
* Copyright: 2026, Buglyos Attila
* Group: Szoft II/E
* Date: 2026.03.09
* Github: https://github.com/Buglyos/
* Licenc: MIT
*/

router.get('/users', verifyToken, UserController.index)
router.get('/users/:id', verifyToken, UserController.show)
router.put('/users/:id/password', verifyToken, UserController.updatePassword)
router.delete('/users/:id', verifyToken, UserController.destroy)

router.get('/teams', verifyToken, TeamController.index)
router.get('/teams/:id', verifyToken, TeamController.show)
router.post('/teams', verifyToken, TeamController.store)
router.put('/teams/:id', verifyToken, TeamController.update)
router.delete('/teams/:id', verifyToken, TeamController.destroy)

router.get('/members', verifyToken, MemberController.index)
router.get('/members/:id', verifyToken, MemberController.show)
router.post('/members', verifyToken, MemberController.create)
router.put('/members/:id', verifyToken, MemberController.update)
router.delete('/members/:id', verifyToken, MemberController.destroy)
