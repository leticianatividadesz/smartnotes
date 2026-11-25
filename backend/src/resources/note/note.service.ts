import { PrismaClient, Note } from "../../generated/prisma/client";
import { CreateNoteDto, UpdateNoteDto } from "./note.types";

const prisma = new PrismaClient();

export async function getAllNotes(): Promise<Note[]> {
  return await prisma.note.findMany();
}

export async function getNoteById(id: string): Promise<Note | null> {
  return await prisma.note.findUnique({ where: { id } });
}

export async function createNote(note: CreateNoteDto): Promise<Note> {
  return await prisma.note.create({ data: note });
}

export async function updateNote(
  id: string,
  note: UpdateNoteDto,
): Promise<Note> {
  return await prisma.note.update({ where: { id }, data: note });
}

export async function deleteNote(id: string): Promise<Note> {
  return await prisma.note.delete({ where: { id } });
}
