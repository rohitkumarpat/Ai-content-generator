"use client"

import React, { useState } from 'react'
import Searchsection from './_components/searchsection'
import Templateslist from './_components/templateslist'

function Dashboard() {
  const [userinput, setuserinput] = useState("")

  return (
    <div>
      {/* Search section */}
      <Searchsection 
        onwrite={(value: string) => {
          setuserinput(value)
          console.log(value)
        }}
      />

      {/* Template list section */}
      <Templateslist passingchild={userinput} />
    </div>
  )
}

export default Dashboard
