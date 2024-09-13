import express from "express";
import kontenController from "../controllers/konten-controller.js";
import validateSchema from "../middlewares/validateSchema.js";
import kontenSchema from "../validations/konten-validation.js";

const router = express.Router();

router.get("/", kontenController.getAll);
router.post("/", validateSchema(kontenSchema), kontenController.create);
router.put("/:id", validateSchema(kontenSchema), kontenController.update);
router.delete("/:id", kontenController.delete);

export default router;
