const DateValidator = date_published => {
	const newsDate = new Date(date_published)

	const day = newsDate.getDate()
	const month = new Intl.DateTimeFormat('ru-RU', {
		month: 'long',
	}).format(newsDate)

	// Преобразовываем номер месяца в его название на русском
	const monthsNames = [
		'января',
		'февраля',
		'марта',
		'апреля',
		'мая',
		'июня',
		'июля',
		'августа',
		'сентября',
		'октября',
		'ноября',
		'декабря',
	]
	const monthIndex = newsDate.getMonth()
	const formattedMonth = monthsNames[monthIndex]

	return `${day} ${formattedMonth}`
}

const DateValidatorForNews = date_published => {
	const newsDate = new Date(date_published)

	const day = newsDate.getDate()

	// Преобразовываем номер месяца в его название на русском
	const monthsNames = [
		'января',
		'февраля',
		'марта',
		'апреля',
		'мая',
		'июня',
		'июля',
		'августа',
		'сентября',
		'октября',
		'ноября',
		'декабря',
	]
	const monthIndex = newsDate.getMonth()
	const formattedMonth = monthsNames[monthIndex]

	const year = newsDate.getFullYear()

	return `${day} ${formattedMonth} ${year}`
}

export default {
	DateValidator,
	DateValidatorForNews,
}
