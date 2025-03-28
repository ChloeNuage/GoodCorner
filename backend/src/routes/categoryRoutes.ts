import { Router } from "express";
import * as categoryController from "../controllers/categoryController";

const router = Router();
// GET
router.get("/", categoryController.getAll);
// #################### TEST ##################
// Get category by id

router.get("/:id", categoryController.getOnebyId);
// ############################################

router.post("/", categoryController.create);
router.put("/:id", categoryController.update);
router.delete("/:id", categoryController.remove);

export default router;