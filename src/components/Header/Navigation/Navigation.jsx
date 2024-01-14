import React from 'react'

import { NavLink } from 'react-router-dom'

import classes from '../Navigation/Navigation.module.scss'

export default function Navigation() {
  return (
    <ul className={classes.Navigation}>
        <NavLink to="/" title='Перейти на главную страницу'>Главная</NavLink>
        <NavLink to="/about" title='Узнайте больше о нашей компании'>О нас</NavLink>
        <NavLink to="/services" title='Наши предоставляемые услуги'>Услуги</NavLink>
        <NavLink to="/price" title='Цены на наши услуги'>Прайс</NavLink>
        <NavLink to="/contacts" title='Свяжитесь с нами'>Контакты</NavLink>
        <NavLink to="/news" title='Последние новости'>Новости</NavLink>
    </ul>
  )
}
