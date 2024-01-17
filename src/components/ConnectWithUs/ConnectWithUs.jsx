import React, { useEffect, useRef, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import { IoIosArrowUp, IoIosMail } from 'react-icons/io'
import { Link } from 'react-router-dom'
import Button from '../../ui/Button/Button'
import style from './ConnectWithUs.module.scss'

export default function ConnectWithUs() {
	const [isClicked, setIsClicked] = useState(false)
	const [isVisible, setIsVisible] = useState(false)
	const modalRef = useRef(null)

	const handleClick = () => {
		setIsClicked(prevIsClicked => !prevIsClicked)
	}
	const handleMouseDown = event => {
		event.stopPropagation() // Предотвращаем всплытие события, чтобы оно не достигло document
		// Добавьте ваш код обработки 'mousedown' здесь
	}

	const handleOutsideClick = event => {
		if (
			modalRef.current &&
			!modalRef.current.contains(event.target) &&
			event.type === 'mousedown' &&
			event.buttons === 1
		) {
			setIsClicked(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		document.addEventListener('mousedown', handleOutsideClick)

		return () => {
			window.removeEventListener('scroll', handleScroll)
			document.removeEventListener('mousedown', handleOutsideClick)
		}
	}, [])

	const handleScroll = () => {
		const currentScrollHeight =
			window.scrollY || document.documentElement.scrollTop
		setIsVisible(currentScrollHeight > 120)
	}

	const handleClickScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<>
			<div className={style.ConnectWithUs}>
				<Button
					onClick={handleClick}
					padding='8px 12px'
					background='#c29870'
					hoverBackground='#143D3D'
					border={true}
					borderRadius='2px'
				>
					{isClicked ? 'Отмена' : 'Связаться с нами'}
				</Button>
				{isVisible && (
					<Button
						border={true}
						padding='8px 8px'
						onClick={handleClickScrollToTop}
						background='#c29870'
						hoverBackground='#143D3D'
						borderRadius='2px'
					>
						<IoIosArrowUp size={24} />
					</Button>
				)}
			</div>
			{isClicked ? (
				<div className={style.modalConnectWithUs} ref={modalRef}>
					<div className={style.modalConnectWithUsInner}>
						<span>Оставьте заявку удобным вам способом!</span>
						<Link to='/' className={style.modalConnectWithUsBox}>
							<FaWhatsapp size={24} />
							Написать в WhatsApp
						</Link>
						<Link to='tel:+79143111754' className={style.modalConnectWithUsBox}>
							<FaPhone size={20} />
							+7 (914) 311-17-54
						</Link>
						<Link to='/' className={style.modalConnectWithUsBox}>
							<IoIosMail size={20} />
							Оставить заявку
						</Link>
					</div>
				</div>
			) : null}
		</>
	)
}
