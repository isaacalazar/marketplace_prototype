"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { signIn } from "../firebase/firebaseActions";
import { useRouter } from "next/navigation"; // Use next/navigation instead

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await signIn(email, password);
      if (res?.user) {
        console.log("User signed in:", res.user);
        router.push("/home");
      }
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };

  return (
    <div className="flex justify-center h-screen items-center container mx-auto">
      <form
        className="w-96 h-2/4 rounded-lg shadow-lg border-black"
        onSubmit={handleSignIn}
      >
        <div className="container mx-auto p-10 flex-col">
          <p className="font-bold text-2xl">Sign In</p>
          <p className="font-light mt-4">
            Enter your email and password to sign in
          </p>

          <div className="container rounded-lg mt-6 h-16 flex flex-col space-y-3">
            <label className="font-bold mb-1">Email</label>
            <input
              className="container border border-gray-300 rounded-lg pt-2 pb-2 pl-3 shadow text-left"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="font-bold mb-1">Password</label>
            <input
              type="password"
              className="container border border-gray-300 rounded-lg pt-2 pb-2 pl-3 shadow text-left"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" className="mt-12 bg-black text-white">
              Sign In
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
