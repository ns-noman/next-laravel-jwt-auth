"use client"
import { useRouter } from 'next/navigation';
import React, { SyntheticEvent, useState } from 'react'

export default function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const submit = async (e: SyntheticEvent) =>{
    e.preventDefault();
    await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: {'Content-type' : 'application/json'},
      body: JSON.stringify({name, email, password}),
    });

    await router.push("/login");

  }

  return (
    <div>
      <main className="form-signin">
        <form onSubmit={submit}>
          <h1 className="h3 mb-3 fw-normal">Please sign Up</h1>
          <div className="form-floating">
            <input type="text" id="name" value={name} name="name" className="form-control" placeholder="Nowab Shorif" onChange={(e)=>setName(e.target.value)}/>
            <label htmlFor="name">Name</label>
          </div>
          <div className="form-floating">
            <input type="email" id="email" name="email" className="form-control" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" id="password" name="password" className="form-control" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
            <label htmlFor="password">Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}
