import { Router } from "express";
import FeriadoController from "../controller/FeriadoController";
import isValidParam from "../util/middleWares/paramsValidation";

const router = Router();

router.route("/feriados").get(FeriadoController.teste);
router.route("/feriados/:estado/:data")
.get(isValidParam, FeriadoController.consultar)
router.route("/feriados/:estado/:municipio/:data")

export default router;