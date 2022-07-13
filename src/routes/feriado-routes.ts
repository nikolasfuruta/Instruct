import { Router } from "express";
import FeriadoController from "../controller/FeriadoController";
import middParam from "../util/middleWares/paramsValidation";

const router = Router();

router.route("/feriados").get(FeriadoController.teste);

router.route("/feriados/consultar")
  .get(FeriadoController.consultarTodos)
  .post(middParam, FeriadoController.consultar);

router.route("/feriados/cadastrar")
  .post(middParam, FeriadoController.cadastrar);

router.route("/feriados/deletar")
  .post(middParam, FeriadoController.deletar);

router.route("/feriados/cadastrar-feriado-movel")
  .post(middParam, FeriadoController.cadastrarMovel);
export default router;