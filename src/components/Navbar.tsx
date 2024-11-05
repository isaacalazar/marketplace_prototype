import React from "react";
import Link from "next/link";
import { useUser } from "@/app/hooks/useUser";
import { Button } from "./ui/button";
import { signOut } from "firebase/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

export const Navbar = () => {
  const user = useUser();
  const router = useRouter();
  const { toast } = useToast();

  const handleSignOut = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await signOut(auth);
      router.replace("/signin");
    } catch (error) {
      console.log("Trouble signing out", error);
      toast({ variant: "destructive", title: "Trouble signing out" });
    }
  };

  return (
    <nav className="p-6 text-black drop-shadow-lg shadow-lg  border-black rounded-sm">
      <div className="mx-auto flex justify-between items-center pr-3 pl-3">
        <div className="text-2xl font-bold">
          <Link href="/home">Collegio</Link>
        </div>

        <div className="text-sm md:text-lg space-x-6 font-medium flex items-center">
          <Link href="/listings">Listings</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/about">About</Link>
          {!user ? (
            <Link href="/signin">
              <Button className="w-24 text-base text-white">Sign In</Button>
            </Link>
          ) : (
            <Button
              className="w-24 text-base text-white"
              onClick={handleSignOut}
            >
              Sign out
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};
