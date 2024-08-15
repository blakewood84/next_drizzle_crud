import { createClient } from "@/utils/supabase/server";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";
import { AvatarDropdown } from "./AvatarDropdown";
import Link from "next/link";
import { AddNewNoteButton } from "./AddNewNoteButton";

export async function NavBar() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  const unauthenticated = error || !data?.user;

  return (
    <nav className="border p-2 flex justify-between flex-row">
      <Link href="/">
        <h2>Note Taking App</h2>
      </Link>
      {unauthenticated ? <LoginButton /> : <_AuthenticatedOptions />}
    </nav>
  );
}

function _AuthenticatedOptions() {
  return (
    <div className="flex flex-row gap-1">
      <AddNewNoteButton />
      <LogoutButton />
      <AvatarDropdown />
    </div>
  );
}
