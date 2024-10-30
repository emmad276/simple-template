import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex text-white justify-around m-5 items-center'>
      <div className='flex'>
            <div className='text-2xl pr-14 font-bold'><Link href="#">BrandName</Link></div>
            <div className='flex gap-x-3 items-center font-semibold text-sm'>
                  <div><Link href="#">Home</Link></div>
                  <div><Link href="#">Product</Link></div>
                  <div><Link href="#">Pricing</Link></div>
                  <div><Link href="#">Contact</Link></div>
            </div>
        </div>
        <div className='flex gap-x-4 items-center'>
          <div className='font-semibold text-sm'><Link href="#">Login</Link></div>
          <div className='border-solid bg-blue-400 font-semibold p-2 items-center px-4'><Link href="#">Join us</Link></div>
        </div>
    </div>
  )
}

export default Navbar