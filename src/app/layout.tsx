import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <div className="border flex flex-col justify-center">Login</div>
    </nav>
  );
}
