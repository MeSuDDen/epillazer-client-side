export const fetchDataAllNews = async (offset, limit, sortBy) => {
	try {
		const response = await fetch(
			`/api/all-news?offset=${offset}&limit=${limit}&sortBy=${sortBy}`,
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
		return data
	} catch (error) {
		console.error('Ошибка при запросе данных:', error)
		throw error // Переброс ошибки для обработки в вызывающем коде
	}
}
