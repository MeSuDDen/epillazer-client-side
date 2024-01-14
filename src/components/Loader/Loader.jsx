import React, { useState, useEffect } from 'react';

import classes from './Loader.module.scss'

import { BallTriangle } from 'react-loader-spinner';

export default function Loader() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setPageLoaded(true);
    };

    // Добавляем обработчик событий для события 'load'
    window.addEventListener('load', handleLoad);

    // Очищаем обработчик событий при размонтировании компонента
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    // Условно рендерим загрузчик на основе состояния pageLoaded
    !pageLoaded ? (
      <div className={classes.Loader}>
        <BallTriangle
          color="#4fa94d"
          height={80}
          width={80}
        />
      </div>
    ) : null
  );
}
