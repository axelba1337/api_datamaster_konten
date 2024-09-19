import express from "express";
import kontenController from "../controllers/konten-controller.js";
import validateSchema from "../middlewares/validateSchema.js";
import kontenSchema from "../validations/konten-validation.js";

const router = express.Router();

router.get("/", kontenController.getAll);
// router.get("/:id", kontenController.getId);
router.get("/:uuid", kontenController.getByUuid); // Route khusus untuk pencarian UUID
router.post("/", validateSchema(kontenSchema), kontenController.create);
router.put("/:id", validateSchema(kontenSchema), kontenController.update);
router.delete("/:id", kontenController.delete); // Soft delete
// router.delete("/hard/:id", kontenController.hardDelete); // Route untuk hard delete
// router.delete("/", kontenController.deleteAll);

export default router;