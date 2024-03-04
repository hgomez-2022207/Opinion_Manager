import User from '../user/user.model.js';
import Public from '../publications/publication.model.js'
 
export const comentaryPost = async(req, res) =>{
    const { email, comentary, qualification } = req.body;
    try {
        console.log('hi');
        const user = await User.findOne({email});
        const pub = await Public.findOne({qualification})

        if (!user) {
            console.log('hi2');
            return res.status(400).json({
                msg: "User not exist"
            });
        }

        if (!pub) {
            return res.status(400).json({
                msg: "Esta publicacion no existe, porfafor intente poner el nombre de nuevo"
            });
            
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

export const comentDelete = async (req, res) =>{
    const { qualification } = req.body;

    const p = await Public.findOne({qualification});
    console.log(p);

    if (!p) {
        return res.status(400).json({
            msg: "El Titulo no existe en la base de datos, porfavor, verifique qeu el Titulo sea el correcto"
        });
    }

    p.comentary.pop()
    p.user.pop();

    const pub = await Public.findByIdAndUpdate(p.id, p);
    const publicacionAutenticado = req.usuario;

    res.status(200).json({
        msg: "Publicacion elimado",
        pub,
        publicacionAutenticado
    })
}