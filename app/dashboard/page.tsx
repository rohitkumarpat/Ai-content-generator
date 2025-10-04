import React from 'react'
import Searchsection from './_components/searchsection'
import Templateslist from './_components/templateslist'


function Dashboard() {
  return (
    <div>
       {/*search section */}
       <Searchsection />

       {/* template list section */}
       <Templateslist />
    </div>
  )
}

export default Dashboard
