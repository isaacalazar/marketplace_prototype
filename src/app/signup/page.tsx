"use client";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log({ res });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center h-screen items-center container mx-auto">
      <form
        className="w-96 h-2/4 rounded-lg shadow-lg border-black"
        onSubmit={handleSignUp}
      >
        <div className="container mx-auto p-10 flex-col">
          <p className="font-bold text-2xl">Sign Up</p>
          <p className="font-light mt-4">
            Enter your email and password to sign up
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
              Sign Up
            </Button>

            <Link
              href="/signin"
              className="font-sans flex justify-center pr-3 text-blue-700"
            >
              If you already have an account, sign in
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
