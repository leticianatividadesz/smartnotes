import express from "express";
import noteRouter from "../resources/note/note.router";

const router = express.Router();

router.use("/notes", noteRouter);

export default router;
