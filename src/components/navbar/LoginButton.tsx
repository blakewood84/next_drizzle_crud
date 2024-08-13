import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export function LoginButton() {
  return (
    <Link className={buttonVariants({ variant: "ghost" })} href="/login">
      Login
    </Link>
  );
}
