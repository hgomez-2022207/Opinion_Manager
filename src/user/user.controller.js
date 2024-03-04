import { response, request } from "express";
import User from './user.model.js';
import bcryptjs from 'bcryptjs'


export const CreateUser = async (req, res) => {
    console.log('createUser');
    const {name, email, password} = req.body;
    const role = 'USER_ROLE';
    const user = new User({name, email, password, role});

    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password,salt);

    await user.save();

    res.status(200).json({
        user
    });
}

export const PutUser = async (req, res = response) =>{
    const { name, email, password} = req.body;

    const us = await User.findOne({email});

    console.log('hiiiiiiiiiiiiii',us);

    if (!us) {
        console.log('hi');
        return res.status(400).json({
            msg: "El usuario no existe en la base de datos, porfavor, verifique qeu el correo sea el correcto"
        });
    }

    //await User.findByIdAndUpdate( name, email, password)
    us.name=name;
    us.password=password;
    const user = await User.findByIdAndUpdate(us.id, us);

    res.status(200).json({
        msg: "this user is update",
        user
    });
}

/*export const PutUser = async (req, res) => {
    const { name } = req.params; // La cualificación de la publicación que deseas actualizar
    const { email, password } = req.body;

    try {
        // Busca la publicación por su cualificación y actualízala con los nuevos datos
        const updateUser = await User.findOneAndUpdate({ name }, { email, password }, { new: true });

        if (!updatedPublication) {
            return res.status(404).json({ message: 'Publicación no encontrada' });
        }

        res.json(updateUser); // Devuelve la publicación actualizada

        res.status(200).json({
            msg: 'Business Actualizado',
            busines,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar la publicación' });
    }
};*/