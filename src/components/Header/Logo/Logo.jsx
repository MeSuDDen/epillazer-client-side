import React from 'react'

import logo from '../../../assets/img/logo.svg'

import { Link } from 'react-router-dom'

import classes from './Logo.module.scss'

export default function Logo() {
  return (
    <Link to='/'>
        <img src={logo} alt="Epillazer27 | Студия лазерной эпиляции" title='Epillazer27 | Студия лазерной эпиляции' width={80} height={80} className={classes.logo}/>
    </Link>
  )
}
