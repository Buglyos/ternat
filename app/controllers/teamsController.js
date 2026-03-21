/*
* File: teamsController.js
* Author: Buglyos Attila
* Copyright: 2026, Buglyos Attila
* Group: Szoft II/E
* Date: 2026.03.09
* Github: https://github.com/Buglyos/
* Licenc: MIT
*/

import Sequelize from 'sequelize';
import Team from '../models/team.js';
import Member from '../models/member.js';


const index = async (req, res) => {
    try {
        const teams = await Team.findAll({
            attributes: [
                'id',
                'name',
                'city',
                'league',
                [Sequelize.fn('COUNT', Sequelize.col('members.id')), 'memberCount']
            ],
            include: [
                {
                    model: Member,
                    as: 'members',   
                    attributes: []
                }
            ],
            group: ['Team.id', 'Team.name', 'Team.city', 'Team.league']
        });

        res.json(teams);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const show = async (req, res) => {
    try {
        const team = await Team.findByPk(req.params.id, {
            include: {
                model: Member,
                as: 'members'   
            }
        });

        if (!team) {
            return res.status(404).json({ error: 'Team not found' });
        }

        res.json(team);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const store = async (req, res) => {
    try {
        const { name, city, league, members } = req.body;

        const team = await Team.create({ name, city, league });

        if (members && members.length > 0) {
            for (const m of members) {
                await Member.create({
                    teamId: team.id,
                    fullName: m.fullName,
                    position: m.position
                });
            }
        }

        res.status(201).json(team);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};


const update = async (req, res) => {
    try {
        const team = await Team.findByPk(req.params.id);
        if (!team) {
            return res.status(404).json({ error: 'Team not found' });
        }
        await team.update(req.body);
        res.json(team);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const destroy = async (req, res) => {
    try {
        const team = await Team.findByPk(req.params.id);
        if (!team) {
            return res.status(404).json({ error: 'Team not found' });
        }
        await team.destroy();
        res.json({ message: 'Team deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default {
    index,
    show,
    store,
    update,
    destroy
};
