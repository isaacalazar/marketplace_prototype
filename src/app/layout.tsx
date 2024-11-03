"use client";
import localFont from "next/font/local";
import "./globals.css";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUser } from "./hooks/useUser";
import { Navbar } from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const protectedRoutes = ["/dashboard"];
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = useUser();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (user === false) return;

    if (!user && protectedRoutes.includes(pathname)) {
      console.log("User not authenticated, redirecting to /signin");
      router.push("/signin");
    }
  }, [user, pathname, router]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
