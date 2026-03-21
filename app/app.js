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

import sequelize from './database/database.js';
import Team from './models/team.js';
import Member from './models/member.js';

const app = express();


app.use(morgan('dev'));
app.use(cors());
app.use(express.json());


app.use(express.static('public'));


app.use('/api/teams', teamRoutes);
app.use('/api/members', memberRoutes);


sequelize
  .sync({ alter: true })
  .then(async () => {
    console.log("Database synced successfully");

    
    const teamCount = await Team.count();
    if (teamCount === 0) {
      await Team.bulkCreate([
        { name: 'Real Madrid', city: 'Madrid', league: 'La Liga' },
        { name: 'FC Barcelona', city: 'Barcelona', league: 'La Liga' },
        { name: 'Manchester City', city: 'Manchester', league: 'Premier League' }
      ]);
      console.log("Test teams inserted");
    }
  })
  .catch(err => console.error("Database sync error:", err));

export default app;
