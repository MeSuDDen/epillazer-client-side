import React from 'react'

import style from './NewsContainer.module.scss'

import { FaArrowRightLong } from 'react-icons/fa6'
import { IoLinkSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import NewsImg from '../../../../assets/img/new.jpg'

export default function NewsContainer({
	date_published,
	title,
	article_text,
	link,
}) {
	const handleClick = () => {
		window.scrollTo(0, 0)
	}
	return (
		<article className={style.NewsContainer}>
			<figure className={style.Image}>
				<img src={NewsImg} alt='' width='100%' />
				<figcaption className={style.Date}>{date_published}</figcaption>
				<p className={style.PostHover}>
					<Link to={`/news/` + link} title='Подробнее' onClick={handleClick}>
						<IoLinkSharp color='white' size={24} />
					</Link>
				</p>
			</figure>

			<Link
				className={style.NewsTitle}
				to={`/news/` + link}
				title={title}
				onClick={handleClick}
			>
				<h2>{title}</h2>
			</Link>

			<p className={style.TextNews}>{article_text}</p>
			<Link
				className={style.ReadMore}
				title='Читать далее'
				to={`/news/` + link}
				onClick={handleClick}
			>
				Читать далее
				<FaArrowRightLong />
			</Link>
		</article>
	)
}
