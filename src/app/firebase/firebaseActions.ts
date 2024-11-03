import { useEffect, useState } from "react";
import { auth } from "@/app/firebase/config";
import {
  browserLocalPersistence,
  setPersistence,
  signInWithEmailAndPassword,
  User as FirebaseUser,
  onAuthStateChanged,
  browserSessionPersistence,
} from "firebase/auth";

export async function signIn(email: string, password: string) {
  try {
    await setPersistence(auth, browserSessionPersistence);
    return signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log("Error occured during sign in!");
  }
}
