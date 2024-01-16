export const fetchDataLatestNews = async (setData, setIsLoading) => {
	try {
		const response = await fetch(
			'http://localhost:3030/api/latest-news?limit=10&sort=-date_published',
			{
				method: 'GET',
			}
		)

		if (!response.ok) {
			if (response.status === 400) {
				throw new Error('Неверный запрос. Пожалуйста, проверьте данные.')
			} else if (response.status === 500) {
				throw new Error(
					'Внутренняя ошибка сервера. Пожалуйста, повторите попытку позже.'
				)
			}
		}

		const data = await response.json()
		setIsLoading(false)
		setData(data)
	} catch (error) {
		console.error('Ошибка при запросе данных:', error)
		setIsLoading(true)
	}
}
