import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Header() {
  return (
    <nav className='flex items-center justify-between p-2'>
        <div className='text-xl bg-blue-500 p-2 text-white rounded-full'>FlixSonic</div>
        <div className='flex gap-5 items-center border-2 rounded-full bg-blue-500 text-white p-2'>
            <NavLink to='/' className='hover:text-black'>Home</NavLink>
            <NavLink to='Anime' className='hover:text-black'>Anime</NavLink>
            <NavLink to='Movies' className='hover:text-black'>Movies</NavLink>
            <NavLink to='Music' className='hover:text-black'>Music</NavLink>
            <NavLink to='Games' className='hover:text-black'>Games</NavLink>
        </div>
        <div className='flex gap-5 items-center border-2 rounded-full bg-blue-500 text-white p-2'>
            <NavLink className='hover:text-black'>Loing</NavLink>
            <NavLink className='hover:text-black'>Register</NavLink>
        </div>
        
    </nav>
  )
}

export default Header