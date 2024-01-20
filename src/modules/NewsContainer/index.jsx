import React, { useEffect, useState } from 'react'
import Container from '../../components/layout/Container/Container'
import Button from '../../ui/Button/Button'
import DateValidator from '../News/helpers/DateValidator'
import { fetchDataAllNews } from './api/fetchDataAllNews'
import NewsBlock from './components/NewsBlock/NewsBlock'
import Loader from './components/Loader/Loader'

export default function NewsContainer() {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [offset, setOffset] = useState(0)
	const [limit, setLimit] = useState(3)
	const [hasMore, setHasMore] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true)

				const newData = await fetchDataAllNews(offset, limit, 'date_published')
				if (newData.length === 0) {
					setHasMore(false)
				} else {
					setData(prevData => {
						// Используем Set для уникальных значений и избежания дублирования
						const newDataIds = new Set(newData.map(item => item.id))
						const updatedData = [
							...prevData.filter(item => !newDataIds.has(item.id)),
							...newData,
						]

						return updatedData
					})
				}
			} catch (error) {
				console.error('Ошибка при загрузке данных:', error)
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()
	}, [offset, limit])

	const loadMoreItems = () => {
		// Увеличиваем offset для загрузки следующего набора элементов
		setOffset(prevOffset => prevOffset + limit)
	}

	return (
		<Container>
      {data.map((item, index) => {
        const formattedDate = DateValidator.DateValidatorForNews(
          item.date_published
        );
        return (
          <NewsBlock
            key={index}
            title={item.title}
            date_published={formattedDate}
            article_text={item.article_text}
            link={item.link}
          />
        );
      })}

      {(isLoading || data.length === 0) && (
        <>
          <Loader />
          <Loader />
          <Loader />
        </>
      )}

      {!isLoading && hasMore && data.length > 0 && (
        <Button onClick={loadMoreItems} disabled={isLoading}>
          Показать еще
        </Button>
      )}
    </Container>
	)
}
