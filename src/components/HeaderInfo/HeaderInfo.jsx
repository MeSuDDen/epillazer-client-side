import React from 'react'

import classes from './HeaderInfo.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

export default function HeaderInfo() {

    const phoneNumber = '79142080580'

  return (
    <div className={classes.HeaderInfo}>
        <div className={classes.HeaderInfoInner}>
            <Link to='/contacts' target='_self' rel='noopener noreferrer' title='Контакты' className={classes.HeaderInfoBox}>
                <FontAwesomeIcon icon={faLocationDot} color='white'/>
                <div>г. Хабаровск ул.Карла-Маркса 122б (410к.)</div>
            </Link>
            <Link to='/contacts' target='_self' rel='noopener noreferrer' title='Контакты' className={classes.HeaderInfoBox}>
                <FontAwesomeIcon icon={faClock} color='white'/>
                <div>Пн - Пт с 9:00 до 18:00</div>
            </Link>
            <Link to={`tel:+${phoneNumber}`} className={classes.HeaderInfoBox}>
                <FontAwesomeIcon icon={faPhone} color='white'/>
                <div>+7 (914) 208-05-80</div>
            </Link>
            <Link to={`https://wa.me/${phoneNumber}`} target='_blank' rel='nofollow' title='Я в вотсапе' className={classes.HeaderInfoBox}>
                <FontAwesomeIcon icon={faWhatsapp} color='white'/>
                <div>+7 (914) 208-05-80</div>
            </Link>
            <Link to='https://www.instagram.com/epillazer27/' target='_blank' title='Я в инстаграме' rel='nofollow' className={classes.HeaderInfoBox}>
                <FontAwesomeIcon icon={faInstagram} color='white'/>
                <div>epillazer27</div>
            </Link>
            <Link to='mailto:epillazer27@info.ru' rel="nofollow" title="epillazer27@info.ru" className={classes.HeaderInfoBox}>
                <FontAwesomeIcon icon={faEnvelope} color='white'/>
                <div>epillazer@info.ru</div>
            </Link>
        </div>
    </div>
  )
}
