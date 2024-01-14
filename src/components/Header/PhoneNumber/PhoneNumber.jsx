import React from 'react'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

import classes from './PhoneNumber.module.scss'

export default function PhoneNumber() {

    const phoneNumber = '79142080580'

    return (
        <Link to={`tel:+${phoneNumber}`} className={classes.NavPhone}>
            <FontAwesomeIcon icon={faPhone} color='#143D3D'/>
            <div>+7 (914) 208-05-80</div>
        </Link>
  )
}
