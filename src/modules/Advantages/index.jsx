import React from 'react'

import Container from '../../components/layout/Container/Container'
import Title from '../../ui/Title/Title'
import AdvantagesItem from './components/AdvantagesItem/AdvantagesItem'
import style from './style.module.scss'

export default function Advantages() {
	return (
		<div className={style.AdvantagesBlock}>
			<Container>
				<Title color={'white'}>Наши преимущества</Title>
				<div className={style.AdvantagesInner}>
					<AdvantagesItem
						title={'Мастерство персонала'}
						text={
							'Средний стаж работы мастера в нашей студии 5 лет. Получайте удовольствие, находясь в опытных руках наших мастеров'
						}
					/>
					<AdvantagesItem
						title={'Мастерство персонала'}
						text={
							'Средний стаж работы мастера в нашей студии 5 лет. Получайте удовольствие, находясь в опытных руках наших мастеров'
						}
					/>
					<AdvantagesItem
						title={'Мастерство персонала'}
						text={
							'Средний стаж работы мастера в нашей студии 5 лет. Получайте удовольствие, находясь в опытных руках наших мастеров'
						}
					/>
					<AdvantagesItem
						title={'Мастерство персонала'}
						text={
							'Средний стаж работы мастера в нашей студии 5 лет. Получайте удовольствие, находясь в опытных руках наших мастеров'
						}
					/>
				</div>
			</Container>
		</div>
	)
}
