
import React, { Suspense } from 'react';
import Loading from '@/app/Todos/loading';


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

      

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <Suspense fallback={<Loading />}>
            {children}
      </Suspense>

      </body>
    
    </html>
  )
}
