import { Button } from "@/components/ui/button";
import { logoutServerAction } from "@/lib/server_actions/logout";

export function LogoutButton() {
  return (
    <form>
      <Button variant="ghost" formAction={logoutServerAction}>
        Logout
      </Button>
    </form>
  );
}
