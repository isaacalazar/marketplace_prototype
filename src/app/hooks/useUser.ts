import { useEffect, useState } from "react";
import { auth } from "@/app/firebase/config";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";

export function useUser() {
  const [user, setUser] = useState<FirebaseUser | null | false>(false); // false for loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser || null);
    });
    console.log("sent a request", user);
    return () => unsubscribe();
  }, []);

  return user;
}
