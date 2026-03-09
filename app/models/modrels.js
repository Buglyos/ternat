import sequelize from '../database/database.js'; 
import Team from './team.js';
import Member from './member.js';
import User from './user.js';


Team.hasMany(Member, { 
    as: 'members', 
    foreignKey: 'teamId' 
});

Member.belongsTo(Team, { 
    as: 'team', 
    foreignKey: 'teamId' 
});


export { sequelize, Team, Member, User };