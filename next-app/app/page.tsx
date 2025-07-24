"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from "./context/AuthContext";

export default function Home() {

  const [message, setMessage] = useState('');
  const {auth , user} = useAuth();

  useEffect(()=>{
    if (auth) {
      setMessage(`Hi ${user.name}`);
    } else {
      setMessage(`You are not logged In!`);
    }
  }, [user, auth]);

  return (
    <div>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <div className="p-5 bg-light border rounded-3 shadow-sm">
              <h1 className="display-4 fw-bold mb-3">Welcome to the Home Page</h1>
              <p className="lead mb-4">
                {message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}