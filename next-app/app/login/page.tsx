"use client";

import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setAuth, setUser } = useAuth();

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/login", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

      if (res.ok) {
        const content = await res.json();

        console.log(content);
        


        setUser(content.user);
        setAuth(true);
        router.push("/");
      } else {
        setAuth(false);
        setUser(null);
      }
    } catch (err: unknown) {
      console.error("Login error:", err);
      setError("Something went wrong.");
    }
  };

  return (
    <div>
      <main className="form-signin">
        <form onSubmit={submit}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          {error && <div className="alert alert-danger">{error}</div>}

          <div className="form-floating mb-3">
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Email address</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
}
