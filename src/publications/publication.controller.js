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

export const PutPublication = async (req, res = response) =>{
    const { qualification, category, text} = req.body;

    const p = await Public.findOne({qualification});


    if (!p) {
        console.log('hi');
        return res.status(400).json({
            msg: "Esta publicacion no existe en la base de datos, porfavor, verifique qeu el titulo sea el correcto y no intente cambiar el titulo"
        });
    }
    p.qualification=qualification;
    p.category=category;
    p.text=text

    const pub = await Public.findByIdAndUpdate(p.id, p);

    res.status(200).json({
        msg: "this publication is update",
        pub
    });
}