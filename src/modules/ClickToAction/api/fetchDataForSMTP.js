export const fetchDataForSMTP = async (name, phone, toast) => {
	try {
		const response = await fetch('http://localhost:3030/api/send-email', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ name, phone }),
		})

		if (response.status === 400) {
			// Обработка ошибки 400 (неверный запрос)
			throw new Error('Неверный запрос. Пожалуйста, проверьте данные.')
		} else if (response.status === 500) {
			// Обработка ошибки 500 (внутренняя ошибка сервера)
			throw new Error(
				'Внутренняя ошибка сервера. Пожалуйста, повторите попытку позже.'
			)
		}

		toast(
			'Ваша заявка успешно отправлена. Мы свяжемся с Вами в ближайшее рабочее время.',
			{
				duration: 10000,
				position: 'top-center',
				icon: '✅',
			}
		)
	} catch (error) {
		await toast('При отправке данных, произошла ошибка!', {
			duration: 5000,
			position: 'top-center',
			icon: '❌',
		})
	}
}
