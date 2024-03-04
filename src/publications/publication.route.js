import { Router } from "express";
import { check } from "express-validator";
import { CratePublication,
        PutPublication, publicDelete} from "./publication.controller.js";
import { validarCampos } from "../middlewares/validar-campos.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.post(
    '/',
    [
        validarJWT,
        check('qualification', 'The qualification is requiredio').not().isEmpty(),
        check('category', 'The category is requiredio').not().isEmpty(),
        check('text', 'The text is requiredio').not().isEmpty(),
        validarCampos,
    ],
    CratePublication
);

router.put(
    '/',
    [
        validarJWT,
        check('qualification', 'The qualification is requiredio').not().isEmpty(),
        check('category', 'The category is requiredio').not().isEmpty(),
        check('text', 'The text is requiredio').not().isEmpty(),
        validarCampos,
    ],
    PutPublication
);

router.delete(
    "/",
    [
        validarJWT,
        check('qualification','invalid email').not().isEmpty(),
    ],publicDelete
);


export default router;