import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>Snappy</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/14845056/pexels-photo-14845056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
        <span>Manish</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
