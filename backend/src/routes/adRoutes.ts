import { Router } from "express";
import * as adController from "../controllers/adController";

const router = Router();


// GET
router.get("/", adController.getAll);

// Get by category
router.get("/category/:id", adController.getByCategory);

router.get("/:id", adController.getOne);

// TODO Get by titre

// POST
router.post("/", adController.create);

// UPDATE
router.put("/:id", adController.update);

// DELETE
router.delete("/:id", adController.remove);

export default router;