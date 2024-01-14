const DateValidator = date_published => {
	const newsDate = new Date(date_published)
	const day = newsDate.getDate()
	const month = new Intl.DateTimeFormat('ru-RU', {
		month: 'long',
	}).format(newsDate)
	return `${day} ${month}`
}

export default DateValidator
