import React from 'react'

const Navbar = () => {
  let Links=[
    {name:'Home', link:'/'},
    {name:'About', link:'/'},
    {name:'Contact', link:'/'},
    {name:'Login', link:'/'},
  ]
  return (
    <div className='shadow-md w-full bg-primary-orange fixed top-0 left-0'>
      <div className='md:px-10 py-2 px-7 md:flex justify-between items-center'>
        <div className='flex text-2xl cursor-pointer items-center '>
          <img src='./src/assets/Logo.svg' className='w-10' alt=''/>
          rdersentix
        </div>
        <ul className='md:flex pl-9 md:p1-0'>
          {
            Links.map(link => 
            <li className='font-semibold my-7 md:my-0 md:ml-8 '>
              <a href='/'>{link.name}</a>
              </li>)
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar
