import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { createClient } from "@/utils/supabase/server";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Note taking app",
  description: "An app for taking notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

function NavBar() {
  return (
    <nav className="border p-2 flex justify-between flex-row">
      <h2>Note Taking App</h2>
      <NavOptions />
    </nav>
  );
}

async function NavOptions() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    return <div className="border flex flex-col justify-center">Login</div>;
  }
  return (
    <div className="border flex flex-row">
      <div className="flex flex-row justify-center items-center gap-2">
        <div>Logout</div>
        <Avatar className="h-[1.5rem] w-[1.5rem]">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
