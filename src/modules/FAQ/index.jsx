import React from 'react'

import Container from '../../components/layout/Container/Container'
import Title from '../../ui/Title/Title'
import FaqBlock from './components/FaqBlock/FaqBlock'
import style from './style.module.scss'

import dataFaq from './utils/data'

const data = Object.values(dataFaq)

export default function FAQ() {
	return (
		<>
			<div className={style.FaqBlock}>
				<Container>
					<Title>Ответы на частые вопросы</Title>
					<div className={style.FaqContainer}>
						{data.map((element, index) => {
							return (
								<FaqBlock
									key={index}
									title={element.title}
									description={element.description}
								/>
							)
						})}
					</div>
				</Container>
			</div>
		</>
	)
}
