/*
* File: membersController.js
* Author: Buglyos Attila
* Copyright: 2026, Buglyos Attila
* Group: Szoft II/E
* Date: 2026.03.09
* Github: https://github.com/Buglyos/
* Licenc: MIT
*/


import { Member, Team } from '../models/modrels.js';

const MembersController = {
    
    async index(req, res) {
        try {
            const members = await Member.findAll({
                include: [{ model: Team, as: 'team' }] 
            });
            res.status(200).json({
                success: true,
                data: members
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Hiba! A lekérdezés sikertelen.',
                error: error.message
            });
        }
    },

    
    async show(req, res) {
        try {
            const member = await Member.findByPk(req.params.id, {
                include: [{ model: Team, as: 'team' }]
            });

            if (!member) {
                return res.status(404).json({
                    success: false,
                    message: 'A keresett tag nem található.'
                });
            }

            res.status(200).json({
                success: true,
                data: member
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Hiba történt a lekérdezés során.',
                error: error.message
            });
        }
    },

    
    async create(req, res) {
        let clientError = false;
        try {
            const { fullName, teamId, position } = req.body;

    
            if (!fullName || !teamId || !position) {
                clientError = true;
                throw new Error('Hiányzó adatok! A név, csapatID és pozíció kötelező.');
            }

            
            const existing = await Member.findOne({ where: { fullName } });
            if (existing) {
                clientError = true;
                throw new Error(`Ez a tag már létezik: ${fullName}`);
            }

            const memberData = await Member.create({ fullName, teamId, position });

            res.status(201).json({
                success: true,
                data: memberData
            });

        } catch (error) {
            res.status(clientError ? 400 : 500).json({
                success: false,
                message: 'A létrehozás sikertelen.',
                error: error.message
            });
        }
    },

    
    async update(req, res) {
        let clientError = false;
        try {
            const { fullName, teamId, position } = req.body;

            if (!fullName || !teamId || !position) {
                clientError = true;
                throw new Error('Hiányzó adatok a frissítéshez!');
            }

            const [updatedRows] = await Member.update(req.body, {
                where: { id: req.params.id }
            });

            if (updatedRows === 0) {
                return res.status(404).json({
                    success: false,
                    message: 'Frissítés sikertelen! A tag nem található.'
                });
            }

            const member = await Member.findByPk(req.params.id);
            res.status(200).json({
                success: true,
                data: member
            });

        } catch (error) {
            res.status(clientError ? 400 : 500).json({
                success: false,
                message: 'A frissítés során hiba történt.',
                error: error.message
            });
        }
    },

    
    async destroy(req, res) {
        try {
            const deleted = await Member.destroy({
                where: { id: req.params.id }
            });

            if (deleted === 0) {
                return res.status(404).json({
                    success: false,
                    message: 'A törlés sikertelen! A rekord nem létezik.'
                });
            }

            res.status(200).json({
                success: true,
                message: 'Tag sikeresen törölve.',
                data: { id: req.params.id }
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Hiba történt a törlés során.',
                error: error.message
            });
        }
    }
}

export default MembersController;