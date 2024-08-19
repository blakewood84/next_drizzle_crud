"use server";

import { db } from "@/db";
import { notesTable } from "@/db/schema";
import { redirect } from "next/navigation";

export async function createNote(formData: FormData) {
  const data = {
    title: formData.get("title") as string | undefined,
    content: formData.get("content") as string | undefined,
  };

  console.log("data: ", data);

  if (!data.title || !data.content) {
    return redirect("/error");
  }

  await db.insert(notesTable).values({
    title: data.title ?? "(No Title)",
    content: data.content ?? "(No Content)",
    userId: 1,
  });
}
