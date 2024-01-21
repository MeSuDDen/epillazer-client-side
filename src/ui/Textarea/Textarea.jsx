import React from 'react'

import './Textarea.module.scss'

export default function Textarea({ name, placeholder, onChange }) {
	return (
		<textarea
			name={name}
			placeholder={placeholder}
			onChange={onChange}
		></textarea>
	)
}
