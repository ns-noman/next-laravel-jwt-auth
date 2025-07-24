"use client";

import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

export default function AuthMenu() {
    const { auth, setAuth, setUser } = useAuth();
    const router = useRouter();
    const logout = async ()=>{
        await fetch('api/logout', {
            method: "POST",
            headers:
            {
                "Component-Type" : 'application/json',
                "credentials" : 'include',
            },
        });
        await router.push('/login');
        setAuth(false);
        setUser(null);
    }
  return (
    <>
      {!auth ? (
        <>
          <li className="nav-item">
            <Link href="/login" className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/register" className="nav-link">
              Registration
            </Link>
          </li>
        </>
      ) : (
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={logout}>
            Logout
          </a>
        </li>
      )}
    </>
  );
}
