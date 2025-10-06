import Templates from '@/app/(data)/Templates'
import React from 'react'
import Templatecard from './Templatecard'

export interface Form {
  label: string
  field: string
  name: string
  required?: boolean
}

export interface Template {
  name: string
  desc: string
  icon: string
  category: string
  slug: string
  aiPrompt: string   
  form?: Form[]
}


interface TemplateslistProps {
  passingchild: string
}

export default function Templateslist({ passingchild }: TemplateslistProps) {
  
  const filteredTemplates = Templates.filter((item) =>
    item.name.toLowerCase().includes(passingchild.toLowerCase()) ||
    item.category.toLowerCase().includes(passingchild.toLowerCase())
  )

  return (
    
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">All Templates</h2>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredTemplates.length > 0 ? (
          filteredTemplates.map((item: Template, index: number) => (
            <Templatecard key={index} {...item} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No templates found.</p>
        )}
      </div>
    </div>
  ) 
}
