import User from '../user/user.model.js';
import Public from '../publications/publication.model.js'
 
export const comentaryPost = async(req, res) =>{
    const { email, comentary, qualification } = req.body;
    try {
        console.log('hi');
        const user = await User.findOne({email});
        const pub = await Public.findOne({qualification})
        console.log('pub',pub)

        console.log(user);
        if (!user) {
            console.log('hi2');
            return res.status(400).json({
                msg: "User not exist"
            });
        }

        if (!pub) {
            console.log('no se ha enctrado la publicacion');
            
        }

        pub.user.push(user.email);
        pub.comentary.push(comentary);

        await pub.save();
 
        res.status(200).json({
            msg: "This user repeat",
            pub,
        });
 
    } catch (e) {
        console.log('hi4', e);
        res.status(500).json({
            msg:  `error when entering comment`
        });
    }
}