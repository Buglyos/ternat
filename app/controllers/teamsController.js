/*
* File: teamsController.js
* Author: Buglyos Attila
* Copyright: 2026, Buglyos Attila
* Group: Szoft II/E
* Date: 2026.03.09
* Github: https://github.com/Buglyos/
* Licenc: MIT
*/


import { Team, Member } from '../models/modrels.js';
export const index = async (req, res) => {
    try {
        const teams = await Team.findAll({
            include: [{
                model: Member,
                as: 'members'
            }]
        });
        res.status(200).json({ success: true, data: teams });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};


export const show = async (req, res) => {
    try {
        const team = await Team.findByPk(req.params.id, {
            include: [{
                model: Member,
                as: 'members'
            }]
        });
        if (!team) return res.status(404).json({ success: false, message: "Nincs ilyen csapat" });
        res.status(200).json({ success: true, data: team });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};


export const store = async (req, res) => {
    try {
        const team = await Team.create(req.body);
        res.status(201).json({ success: true, data: team });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};


export const update = async (req, res) => {
    try {
        const team = await Team.findByPk(req.params.id);
        if (!team) return res.status(404).json({ success: false, message: "Nincs ilyen csapat" });
        await team.update(req.body);
        res.status(200).json({ success: true, data: team });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};


export const destroy = async (req, res) => {
    try {
        const team = await Team.findByPk(req.params.id);
        if (!team) return res.status(404).json({ success: false, message: "Nincs ilyen csapat" });
        await team.destroy();
        res.status(200).json({ success: true, message: "Sikeres törlés" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

export default { index, show, store, update, destroy };