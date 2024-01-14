import React, { useState } from 'react';
import classes from './CtaBlock.module.scss';
import Container from '../layout/Container/Container';
import Input from '../../ui/Input/Input';

export default function CtaBlock() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError(''); // Сброс ошибки при изменении значения
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    setPhoneError(''); // Сброс ошибки при изменении значения
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Валидация имени
    if (name.trim() === '') {
      setNameError('Пожалуйста, введите ваше имя');
      return;
    }

    // Валидация телефона
    const phoneRegex = /^(?:\+7 ?\(\d{3}\)\d{3}-\d{2}-\d{2}|\+7 ?\d{3}\d{3}\d{2}\d{2}|8 ?\d{3}\d{3}\d{2}\d{2}|7 ?\d{3}\d{3}\d{2}\d{2}|\+7 ?\(\d{3}\) ?\d{3} ?\d{2} ?\d{2}|\+7 ?\(\d{3}\) ?\d{3}-\d{2}-\d{2}|\+7 ?\(\d{3}\) ?\d{3} ?\d{2}-\d{2}-\d{2})$/;

    if (!phoneRegex.test(phone)) {
      setPhoneError('Пожалуйста, введите корректный номер телефона');
      return;
    }

    // Отправка данных на сервер
    try {
      const response = await fetch('http://localhost:3030/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone }),
      });

      if (!response.ok) {
        throw new Error('Ошибка отправки данных на сервер');
      }

      // Остальная логика, если запрос успешен
      console.log('Данные успешно отправлены на сервер');
    } catch (error) {
      console.error('Произошла ошибка:', error);
    }
  };

  return (
    <div className={classes.CtaBlock}>
      <Container>
        <div className={classes.CtaBlockInner}>
          <div className={classes.TitleContent}>
            <h1>Скидка 20%</h1>
            <span>новым клиентам на любую услугу при записи онлайн</span>
          </div>
          <form method='post' onSubmit={handleSubmit} className={classes.CtaBlockInputs}>
            <div>
              <span>Ваше имя</span>
              <input type="text" placeholder='Анна' value={name} onChange={handleNameChange} />
              {nameError && <span className={classes.ErrorText}>{nameError}</span>}
            </div>
            <div>
              <span>Ваш телефон</span>
              <input type="text" placeholder='+7 (___)___-__-__' value={phone} onChange={handlePhoneChange} />

              {phoneError && <span className={classes.ErrorText}>{phoneError}</span>}
            </div>
            <div>
              <span className={classes.InvisibleText}></span>
              <button type='submit'>
                Записаться
              </button>
            </div>
            <Input type='text' placeholder='Номер телефона' onChange={handlePhoneChange} value='phone'/>
            <div>
              <span className={classes.InvisibleText}></span>
              <div className={classes.Line}></div>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
