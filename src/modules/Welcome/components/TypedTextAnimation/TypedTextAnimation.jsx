import React from 'react'

import { TypeAnimation } from 'react-type-animation'

export default function TypedTextAnimation() {
	return (
		<TypeAnimation
			sequence={[
				// Same substring at the start will only be typed out once, initially
				'Открой мир гладкой кожи, стань более уверенной и экономь кучу времени вместе с лазерной эпиляцией',
				500, // wait 1s before replacing "Mice" with "Hamsters"
				'Лазерная эпиляция \nподмышек',
				2000,
				'Лазерная эпиляция \nинтимной зоны',
				2000,
				'Лазерная эпиляция \nвсего тела',
				2000,
			]}
			wrapper='span'
			speed={50}
			style={{
				fontSize: '20px',
				display: 'block',
				whiteSpace: 'pre-line',
				marginTop: '65px',
				height: '90px',
			}}
			repeat={Infinity}
		/>
	)
}
