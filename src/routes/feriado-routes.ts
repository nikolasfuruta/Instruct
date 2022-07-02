import { Router } from "express";
import FeriadoController from "../controller/FeriadoController";

const router = Router();

router.route("/feriados").get(FeriadoController.teste);
router.route("/feriados/:nome/:data").get(FeriadoController.consultar)

export default router;