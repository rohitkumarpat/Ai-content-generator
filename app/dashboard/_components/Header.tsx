import { Icon, Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='flex p-5 border-b-2 justify-between '>
    <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg'>
      <Search />
      <input type='text' placeholder='search here..' className=' outline-none' />
    </div>
    <div>
      <h2 className='bg-red-600 p-2 rounded-full text-xs text-white bg-center'>🔥Join Membership just for $9.99/Month</h2>
    </div>
    </div>
  )
}

export default Header
