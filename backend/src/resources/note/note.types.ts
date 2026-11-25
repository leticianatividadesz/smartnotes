import { Note } from "../../generated/prisma/client";

export type CreateNoteDto = Pick<Note, "title" | "content">;
export type UpdateNoteDto = Pick<Note, "title" | "content">;
