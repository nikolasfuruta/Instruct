import { Router } from "express";
import FeriadoController from "../controller/FeriadoController";

const router = Router();

router.route("/feriados").get(FeriadoController.teste);
router.route("/feriados").post(FeriadoController.consultar)

export default router;