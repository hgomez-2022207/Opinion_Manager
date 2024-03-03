import jwt from 'jsonwebtoken';
import { token } from 'morgan';

export const generarJWT = (uid = ' ') =>{
    return new Promise((resolve, reject) => {
        const playload = ({uid}); 

        jwt.sign(
            playload,
            process.env.SECRETORPRIVATEKEY,{ expiresIn:'1h' },
            (err,token) => {
                err ? (console.log(err), reject('No sepudo generar el token')) : resolve(token);
            }
        );

    });
}