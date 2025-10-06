import { Search } from 'lucide-react'
import React from 'react'


interface SearchSectionProps {
  onwrite: (value: string) => void
}

export default function Searchsection({ onwrite }: SearchSectionProps) {
  return (
    <div className='p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 text-white'>
      <h2 className='text-3xl font-bold text-center'>Browse All Templates</h2>
      <p className='text-center'>What would you like to create today?</p>
      
      <div className='mt-4 flex justify-center items-center'>
        <div className='flex border gap-2 items-center rounded-md bg-white text-gray-600 w-1/2 p-2'>
          <Search className='text-purple-500' />
          <input 
            type='text' 
            placeholder='Search'
            onChange={(e) => onwrite(e.target.value)}  
            className='bg-transparent pl-1 outline-none w-full'
          />
        </div>
      </div>
    </div>
  )
}
