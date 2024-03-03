import jwt from 'jsonwebtoken';
import User from '../user/user.model.js';

export const validarJWT = async (req, res, next) =>{
    const token = req.header('x-token');

    if(!token){

        return res.status(401).jason({
            msg: "No se hizo la peticion"
        });
        
    }

    try{

        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        const user = await User.findById(uid);

        if(!user){
            return res.status(401).json({
                msg: 'Usuario no existe en la base de datos'
            });
        }

        if(!user.state){
            return res.status(401).json({
                msg: 'Token no valido - usario con estado false'
            });
        }

        req.user = user

        next();

    }catch(e){

        console.log(e);
        res.status(401).json({
            msg: "Token invalido"
        });

    }
}