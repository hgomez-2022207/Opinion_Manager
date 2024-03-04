'use strict'

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { dbConnection } from './mongo.js';

import userRoutes from '../src/user/user.route.js';
import authRoute from '../src/auth/auth.route.js'
import publicRoute from '../src/publications/publication.route.js'
import comentaryRoute from '../src/comentario/comentary.route.js';

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/user'
        this.authPath = '/api/auth'
        this.publicPath = '/api/public'
        this.comentPat = 'api/comentary'

        this.conectarDB();
        this.middlewares();
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(helmet());
        this.app.use(morgan('dev'));
    }

    routes(){
        this.app.use(this.userPath,userRoutes)
        this.app.use(this.authPath,authRoute)
        this.app.use(this.publicPath,publicRoute)
        this.app.use(this.comentPat,comentaryRoute)

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor Ejecutandose y escuchando el puerto',this.port)
        });
    }
    
}

export default Server;