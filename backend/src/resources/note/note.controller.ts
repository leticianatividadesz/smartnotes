import { Request, Response } from "express";
import {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
} from "./note.service";
import { isValidNoteBody } from "./note.schema";

const index = async (req: Request, res: Response) => {
  try {
    const notes = await getAllNotes();
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json(err);
  }
};

const create = async (req: Request, res: Response) => {
  if (!isValidNoteBody(req.body)) {
    res.status(400).json({ error: "Dados inválidos" });
    return;
  }
  try {
    const newNote = await createNote(req.body);
    res.status(201).json(newNote);
  } catch (err) {
    res.status(500).json(err);
  }
};

const read = async (req: Request, res: Response) => {
  try {
    const note = await getNoteById(String(req.params.id));
    if (!note) {
      res.status(404).json({ error: "Nota não encontrada" });
      return;
    }
    res.status(200).json(note);
  } catch (err) {
    res.status(500).json(err);
  }
};

const update = async (req: Request, res: Response) => {
  if (!isValidNoteBody(req.body)) {
    res.status(400).json({ error: "Dados inválidos" });
    return;
  }
  try {
    const id = String(req.params.id);
    if (!(await getNoteById(id))) {
      res.status(404).json({ error: "Nota não encontrada" });
      return;
    }
    const note = await updateNote(id, req.body);
    res.status(200).json(note);
  } catch (err) {
    res.status(500).json(err);
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    if (!(await getNoteById(id))) {
      res.status(404).json({ error: "Nota não encontrada" });
      return;
    }
    await deleteNote(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json(err);
  }
};

export default { index, create, read, update, remove };
