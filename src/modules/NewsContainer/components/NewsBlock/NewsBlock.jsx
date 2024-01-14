import React from 'react'

import NewsImg from '../../../../assets/img/new.jpg'
import style from './NewsBlock.module.scss'

import { faArrowRight, faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import Button from '../../../../ui/Button/Button'

export default function NewsBlock({
	title,
	date_published,
	link,
	article_text,
}) {
	const handleClick = () => {
		window.scrollTo(0, 0)
	}
	return (
		<article className={style.Article}>
			<figure>
				<div className={style.ArticleHeader}>
					<Link
						className={style.ArticleTitle}
						to={`/news/` + link}
						title={title}
						onClick={handleClick}
					>
						<h1>{title}</h1>
					</Link>
					<div className={style.ArticleDate}>
						<FontAwesomeIcon icon={faCalendarDay} color='#143D3D' size='lg' />
						<figcaption className={style.Date}>{date_published}</figcaption>
					</div>
				</div>
				<div className={style.ArticleMain}>
					<img src={NewsImg} alt={title} width='100%' />
					<div className={style.ArticleMainInner}>
						<p>{article_text}</p>
						<div className={style.ArticleButton}>
							<Button>
								Читать далее
								<FontAwesomeIcon icon={faArrowRight} />
							</Button>
						</div>
					</div>
				</div>
			</figure>
		</article>
	)
}
