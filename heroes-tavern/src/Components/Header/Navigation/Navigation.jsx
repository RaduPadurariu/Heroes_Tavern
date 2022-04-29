
import React from 'react'
import NavButtons from './NavButtons/NavButtons'

const Navigation = () => {
  return (
    <div className='navigation'>
      <NavButtons label="Posts" />
      <NavButtons label="Log in" />
      <NavButtons label="Sign up" />
    </div>
  )
}

export default Navigation