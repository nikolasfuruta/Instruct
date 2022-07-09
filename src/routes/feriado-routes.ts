import { Router } from "express";
import FeriadoController from "../controller/FeriadoController";
import middParam from "../util/middleWares/paramsValidation";

const router = Router();

router.route("/feriados").get(FeriadoController.teste);

router.route("/feriados")
  //.post(middParam, FeriadoController.consultar)
  .post(middParam, FeriadoController.cadastrar)

export default router;