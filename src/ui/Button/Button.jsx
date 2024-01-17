import React, { useState } from 'react'
import style from './Button.module.scss'

export default function Button({
	children,
	onClick,
	disabled,
	padding,
	background,
	hoverBackground,
	border,
	borderRadius,
	onMouseEnter,
	onMouseLeave,
	onMouseDown,
}) {
	const [isHovered, setIsHovered] = useState(false)

	const handleMouseEnter = () => {
		setIsHovered(true)
		if (onMouseEnter) {
			onMouseEnter() // Вызывает переданный обработчик onMouseEnter, если он предоставлен
		}
	}

	const handleMouseLeave = () => {
		setIsHovered(false)
		if (onMouseLeave) {
			onMouseLeave() // Вызывает переданный обработчик onMouseLeave, если он предоставлен
		}
	}
	const handleMouseDown = event => {
		event.stopPropagation() // Предотвращаем всплытие события, чтобы оно не достигло document
		// Добавьте ваш код обработки 'mousedown' здесь
	}

	const buttonStyle = {
		padding: padding || '16px 40px',
		background: isHovered
			? hoverBackground || '#c29870'
			: background || '#143D3D',
		border: border ? '1px solid black' : 'none',
		borderRadius: borderRadius || '0px',
	}

	return (
		<button
			className={style.button}
			onClick={onClick}
			disabled={disabled}
			style={buttonStyle}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onMouseDown={handleMouseDown}
		>
			{children}
		</button>
	)
}
