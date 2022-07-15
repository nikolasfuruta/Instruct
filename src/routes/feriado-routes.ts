import { Router } from "express";
import FeriadoController from "../controller/FeriadoController";
import middParam from "../util/middleWares/paramsValidation";
import verifyCode from "../util/middleWares/verifyCode"

const router = Router();

router.route("/feriados/consultar")
  .get(FeriadoController.consultarTodos)
  .post(middParam, FeriadoController.consultar);

router.route("/feriados/cadastrar")
  .post(middParam, FeriadoController.cadastrar);

router.route("/feriados/deletar")
  .post(verifyCode, FeriadoController.deletar);

/***********************************************************/

router.route("/feriados/cadastrar-movel")
  .post(middParam, FeriadoController.cadastrarMovel);

router.route("/feriados/deletar-movel")
  .post(middParam, FeriadoController.deletarMovel);
export default router;