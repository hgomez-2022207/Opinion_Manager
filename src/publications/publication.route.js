import { Router } from "express";
import { check } from "express-validator";
import { CratePublication } from "./publication.controller.js";
import { validarCampos } from "../middlewares/validar-campos.js";

const router = Router();

router.post(
    '/',
    [
        check('qualification', 'The qualification is requiredio').not().isEmpty(),
        check('category', 'The category is requiredio').not().isEmpty(),
        check('text', 'The text is requiredio').not().isEmpty(),
        validarCampos,
    ],
    CratePublication
);
/*
router.put(
    '/',
    [
        check('qualification', 'The qualification is requiredio').not().isEmpty(),
        check('category', 'The category is requiredio').not().isEmpty(),
        check('text', 'The text is requiredio').not().isEmpty(),
        validarCampos,
    ],
    PutUser
);*/

export default router;