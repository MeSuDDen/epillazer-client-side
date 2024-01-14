import React from 'react'

const ModelOnline = ({ isOpen, onClose }) => {
	if (!isOpen) return null

	return (
		<div className='modal-overlay'>
			<div className='modal'>
				<button className='close-button' onClick={onClose}>
					Закрыть модальное окно
				</button>
				<div>ModelOnline</div>
				<div>ModelOnline</div>
			</div>
		</div>
	)
}

export default ModelOnline
