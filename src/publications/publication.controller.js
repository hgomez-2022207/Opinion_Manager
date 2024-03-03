import { response, request } from "express";
import Public from './publication.model.js';
import bcryptjs from 'bcryptjs'


export const CratePublication = async (req, res) => {
    console.log('createPublic');
    const {qualification, category, text} = req.body;
    const publication = new Public({qualification, category, text});

    await publication.save();

    res.status(200).json({
        publication
    });
}