import React from 'react'
import { Link } from 'react-router-dom'
import style from './Menu.module.scss'

export default function Menu({ header, items, active, setActive }) {
	const handleLinkClick = () => {
    setActive(false);
    document.body.classList.remove('no-scroll');
		window.scrollTo(0, 0)
  };
	const handleOutClick = () => {
    setActive(false);
    document.body.classList.remove('no-scroll');
  };
	return (
		<div
			className={active ? `${style.menu} ${style.active}` : `${style.menu}`}
			onClick={handleOutClick}
		>
			<div className={style.blur}></div>
			<div className={style.menuContent} onClick={e => e.stopPropagation()}>
				<div className={style.menuHeader}>{header}</div>
				<ul>
					{items.map(item => (
						<li>
							<Link to={item.href} onClick={handleLinkClick}>
								{item.value}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
