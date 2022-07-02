import { Router } from "express";
import FeriadoController from "../controller/FeriadoController";

const router = Router();

router.route("/feriados").get(FeriadoController.teste)

export default router;