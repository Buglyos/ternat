/*
* File: app.js
* Author: Buglyos Attila
* Copyright: 2026, Buglyos Attila
* Group: Szoft II/E
* Date: 2026.03.09
* Github: https://github.com/Buglyos/
* Licenc: MIT
*/

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import teamRoutes from './routes/teamRoutes.js';
import memberRoutes from './routes/memberRoutes.js';

const app = express();


app.use(morgan('dev'));
app.use(cors());
app.use(express.json());


app.use(express.static('public'));


app.use('/api/teams', teamRoutes);
app.use('/api/members', memberRoutes);

export default app;