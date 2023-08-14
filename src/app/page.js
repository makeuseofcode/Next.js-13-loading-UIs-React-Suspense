import React from 'react';
import Link from "next/link";



function Home () {
  return (
    <main>
      <div>
        <h1>Next.js 13 React Suspense Loading Example</h1>
        <Link href="/Todos">Get Todos</Link>
      </div>
    </main>
  )
}

export default Home;
