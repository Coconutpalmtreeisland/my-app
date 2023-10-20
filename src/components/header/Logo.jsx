import React from 'react'
import { Link } from 'react-router-dom'

import { BiSolidFridge } from 'react-icons/bi'

const Logo = () => {
  return (
    <h1 className="header__logo">
        <Link to="/">
          <em><BiSolidFridge /></em>
          <span>cooking youtube</span>
        </Link>
    </h1>
  )
}

export default Logo