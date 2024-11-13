import React from 'react'
import Navbar from '../componentes/Navbar.tsx'

export default function Home() {
  return (
    <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
      <Navbar />
      <h1>Hola</h1>
    </div>
  )
}
