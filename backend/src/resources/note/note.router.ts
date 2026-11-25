import { Router } from "express";
import noteController from "./note.controller";

const router = Router();

router.get("/", noteController.index);
router.post("/", noteController.create);
router.get("/:id", noteController.read);
router.put("/:id", noteController.update);
router.delete("/:id", noteController.remove);

export default router;
