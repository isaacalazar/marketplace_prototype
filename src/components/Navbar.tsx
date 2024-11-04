import React from "react";
import Link from "next/link";
import { useUser } from "@/app/hooks/useUser";
import { Button } from "./ui/button";
import { ReactFormState } from "react-dom/client";
import { signOut } from "firebase/auth";
import { auth } from "@/app/firebase/config";
import { useSignOut } from "react-firebase-hooks/auth";

export const Navbar = () => {
  const user = useUser();

  const handleSignOut = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signOut(auth);
      console.log("Signed out ");
    } catch (error) {
      console.log("Trouble signing out");
    }
  };

  return (
    <nav className="p-6 text-black drop-shadow-lg shadow-lg border-s border-black rounded-sm">
      <div className="mx-auto flex justify-between items-start pr-3 pl-3">
        <div className="text-2xl font-bold">
          <Link href="/home">Collegio</Link>
        </div>

        <div className="hidden md:block text-sm md:text-lg space-x-6 aspect-auto font-medium">
          <Link href="/listings">Listings</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/about">About</Link>
          {!user || user === null ? (
            <Link href="/signin"> Sign Up</Link>
          ) : (
            <Button className="w-20" onSubmit={handleSignOut}>
              Sign out
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};
