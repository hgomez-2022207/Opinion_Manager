import { Router } from "express";
import {check} from "express-validator"

import { validarCampos } from "../middlewares/validar-campos.js";
import {  comentaryPost,comentDelete } from "./comentary.controller.js";
import { validarJWT } from "../middlewares/validar-jwt.js";
  
const router = Router();
 
router.post(
    "/",
    [
        validarJWT,
        check("email", "User is not valido").not().isEmpty(),
         check("comentary","Comentary is not valid").not().isEmpty(),
         validarCampos,
 
    ], comentaryPost);

router.delete(
    "/",
    [
        validarJWT,
        check('qualification','invalid email').not().isEmpty(),
    ],comentDelete
);

export default router;