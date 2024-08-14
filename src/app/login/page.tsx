import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { loginServerAction } from "@/lib/server_actions";
import Link from "next/link";

// TODO: Add Form Validation on Client and Server
export default function LoginPage() {
  return (
    <main className="flex justify-center py-4">
      <Card className="w-[550px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Welcome to Note Taking App. Please login.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <label htmlFor="email">Email:</label>
            <Input id="email" name="email" type="email" required />
            <label htmlFor="password">Password:</label>
            <Input id="password" name="password" type="password" required />
            <div className="flex justify-end pt-2">
              <Button formAction={loginServerAction}>Login</Button>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground flex flex-row gap-1">
            <span>Don't have an account?</span>
            <Link className="underline text-blue-900" href="/signup">
              Register Here
            </Link>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
