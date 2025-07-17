"use client"
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Home() {

  useEffect(()=>{
    (
      async () => {
        const response = await fetch('http://localhost:8000/api/user', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
          },
        });
        const content = await response.json();
        console.log(response);
        console.log(content);
        // const response = await fetch("http://127.0.0.1:8000/api/user", {
        //   credentials: 'include',
        // });
        // const content = await response.json();
      }
    )()
  });


  return (
    <div>
      <Head>
        <title>Home | Bootstrap Design</title>
      </Head>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <div className="p-5 bg-light border rounded-3 shadow-sm">
              <h1 className="display-4 fw-bold mb-3">Welcome to the Home Page</h1>
              <p className="lead mb-4">
                This is a simple Bootstrap-styled homepage built with Next.js 15.
              </p>
              <Link href="/login"><button className='btn btn-primary'>Go To Loing Page</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
