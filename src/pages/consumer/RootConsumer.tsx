import React from 'react'
import { Outlet } from 'react-router-dom'

const RootConsumer = () => {
  return (
    <div>
      Root page
      <Outlet/>
    </div>
  )
}

export default RootConsumer
