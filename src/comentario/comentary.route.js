const { Router } = require('express');
const { check } = require ('express-validator');
 
 
const {comentaryPost} = require('./comentary.controller.js');
const { validarCampos} = require ('../middlewares/validar-campos');
 
const router = Router();
 
router.post(
    "/",
    [
        check("user", "User is not valido").not().isEmpty(),
         check("comentary","Comentary is not valid").not().isEmpty(),
         validarCampos,
 
    ], comentaryPost);

export default router;