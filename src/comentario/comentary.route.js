import { Router } from "express";
import {check} from "express-validator"

import { validarCampos } from "../middlewares/validar-campos.js";
import {  comentaryPost } from "./comentary.controller.js";
  
const router = Router();
 
router.post(
    "/",
    [
        check("email", "User is not valido").not().isEmpty(),
         check("comentary","Comentary is not valid").not().isEmpty(),
         validarCampos,
 
    ], comentaryPost);

export default router;