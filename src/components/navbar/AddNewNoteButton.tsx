import { Plus } from "lucide-react";
import { buttonVariants } from "../ui/button";
import Link from "next/link";

export function AddNewNoteButton() {
  return (
    <Link
      className={buttonVariants({ variant: "ghost" }) + "flex gap-1"}
      href="/new"
    >
      <Plus className="w-5 h-5" /> <span>New Note</span>
    </Link>
  );
}
