import React from "react";
import Link from "next/link";
import { useUser } from "@/app/hooks/useUser";
import { Button } from "./ui/button";
import { signOut } from "firebase/auth";
import { auth } from "@/app/firebase/config";
import { Router } from "next/router";
import { redirect, useRouter } from "next/navigation";

export const Navbar = () => {
  const user = useUser();
  const router = useRouter();
  const handleSignOut = async (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("sent log out");
    try {
      await signOut(auth);
      console.log("Signed out");
      router.replace("/signin");
    } catch (error) {
      console.log(error);
      console.log("Trouble signing out");
    }
  };

  return (
    <nav className="p-6 text-black drop-shadow-lg shadow-lg border-s border-black rounded-sm">
      <div className="mx-auto flex justify-between items-start pr-3 pl-3">
        <div className="text-2xl font-bold">
          <Link href="/home">Collegio</Link>
        </div>

        <div className="text-sm md:text-lg space-x-6 font-medium">
          <Link href="/listings">Listings</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/about">About</Link>
          {!user || user === null ? (
            <Button
              className="w-24 text-white text-base"
              onClick={handleSignOut}
            >
              Sign out
            </Button>
          ) : (
            <Button className="w-20" onClick={handleSignOut}>
              Sign out
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};
