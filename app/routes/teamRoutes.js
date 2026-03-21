/*
* File: teamRoutes.js
* Author: Buglyos Attila
* Copyright: 2026, Buglyos Attila
* Group: Szoft II/E
* Date: 2026.03.09
* Github: https://github.com/Buglyos/
* Licenc: MIT
*/

import express from 'express';
import TeamsController from '../controllers/teamsController.js';

const router = express.Router();

router.get('/', TeamsController.index);
router.get('/:id', TeamsController.show);
router.post('/', TeamsController.store);        
router.put('/:id', TeamsController.update);
router.delete('/:id', TeamsController.destroy);

export default router;