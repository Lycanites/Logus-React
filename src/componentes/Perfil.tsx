import React from 'react'
import { Link } from 'react-router-dom'
import './Perfil.css'

const Perfil = () => {
  return (
    <div>
      <Link to='/Carousel'>
      <button className="bg-blue-400 text-white px-4 py-2 rounded">
        Tienda
      </button>
      </Link>
    </div>
  )
}

export default Perfil
