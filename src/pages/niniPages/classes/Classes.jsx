import React from 'react'
import HeaderClass from './HeaderClass'
import Planning from './Planning'
import ClassExplorer from './ClassExplorer'
import ClassCTA from './ClassCTA'

const Classes = () => {
  return (
    <div className='space-y-5'>
      <HeaderClass />
      <Planning />
      <ClassExplorer />
      <ClassCTA />
    </div>
  )
}

export default Classes