import User from '../user/user.model.js'

export const existeEmail = async (email = '') => {

    console.log('existeEmail');
    const existeEmail = await User.findOne({ email });

    if (existeEmail) {
        throw new Error(`El email ${email} ya fue registrado`);
    }
}