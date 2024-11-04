import React from "react";
import Link from "next/link";
import { useUser } from "@/app/hooks/useUser";

export const Navbar = () => {
  const user = useUser();
  return (
    <nav className="p-4 text-black  border-black rounded-sm">
      <div className="mx-auto flex justify-between items-start pr-3 pl-3">
        <div className="text-xl font-bold">
          <Link href="/home">Collegio</Link>
        </div>

        <div></div>
        <div className="space-x-12 font-semibold">
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/dashboard">Dashboard</Link>

          {!user || user === null ? (
            <Link href="/signin"> Sign Up</Link>
          ) : (
            <Link href="/logout">Log Out</Link>
          )}
        </div>
      </div>
    </nav>
  );
};
