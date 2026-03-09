/*
* File: memberRoutes.js
* Author: Buglyos Attila
* Copyright: 2026, Buglyos Attila
* Group: Szoft II/E
* Date: 2026.03.09
* Github: https://github.com/Buglyos/
* Licenc: MIT
*/

import express from 'express';
import MembersController from '../controllers/MembersController.js';


const router = express.Router();


router.get('/', MembersController.index);          
router.get('/:id', MembersController.show);       
router.post('/', MembersController.create);       
router.put('/:id', MembersController.update);     
router.delete('/:id', MembersController.destroy); // Törlés

export default router;