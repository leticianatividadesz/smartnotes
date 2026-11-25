import { CreateNoteDto } from "./note.types";

export function isValidNoteBody(body: unknown): body is CreateNoteDto {
  if (typeof body !== "object" || body === null) return false;
  const { title, content } = body as Record<string, unknown>;
  return (
    typeof title === "string" &&
    title.length > 0 &&
    title.length <= 100 &&
    typeof content === "string" &&
    content.length > 0
  );
}
