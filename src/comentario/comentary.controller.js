import User from '../user/user.model.js';
import Public from '../publications/publication.model.js'
 
export const comentaryPost = async(req, res) =>{
    const { email, comentary } = req.body;
    try {
        console.log('hi');
        const user = await User.findOne({email});
        const pub = await Public.findOne({comentary})
 
        if (!user) {
            console.log('hi2');
            return res.status(400).json({
                msg: "User not exist"
            });
        }

        pub.email.push(user);
        pub.comentary.push(comentary);

        await pub.save();
 
        res.status(200).json({
            msg: "This user repeat",
            pub,
        });
 
    } catch (e) {
        console.log('hi4');
        res.status(500).json({
            msg:  `error al unirse a un grupo`
        });
    }
}
 
module.exports = {
    joinPost,
    joinDelete
}