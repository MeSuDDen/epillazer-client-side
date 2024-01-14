import React, { useState } from 'react';

import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import Input from '../../../../ui/Input/Input';

import { validateName, validatePhone } from '../../helpers/validateForm'
import { handleNameChange, handlePhoneChange } from '../../helpers/handleChange'
import { fetchDataForSMTP } from '../../api/fetchDataForSMTP'
import toast from 'react-hot-toast';
import Loader from '../Loader/Loader';


export default function FormForSmtp() {

    {/* States */}
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [nameError, setNameError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    {/* Отправка формы */}
    const handleSubmit = async (event) => {
        event.preventDefault();

        {/* Валидация */}
        const isNameValid = validateName(name, setNameError);
        const isPhoneValid = validatePhone(phone, setPhoneError);

        {/* Проверяем */}
        if (isNameValid && isPhoneValid) {

            setIsLoading(true)

            {/* Отправка данных на сервер */}
            await fetchDataForSMTP(name, phone, toast);

            {/* Очистка полей */}
            setName('')
            setPhone('')
            setIsLoading(false)
        }
    };

  return (
    <form method='post' onSubmit={handleSubmit} className='CtaBlockInputs'>
        <div>
            <span>Ваше имя</span>
            <Input
                type='text' 
                placeholder='Анна' 
                onChange={(event) => handleNameChange(event, setName, setNameError)} 
                value={name}
            />
            {nameError && <span className='ErrorText'>{nameError}</span>}
        </div>

        <div>
            <span>Ваш телефон</span>
            <Input 
                type='text' 
                placeholder='+7 (___)___-__-__' 
                onChange={(event) => handlePhoneChange(event, setPhone, setPhoneError)} 
                value={phone}
                pattern="[+0-9()- ]*"
            />
            {phoneError && <span className='ErrorText'>{phoneError}</span>}
        </div>

        <div>
            <span className='InvisibleText'></span>
            <ButtonSubmit isLoading={isLoading}>
                Записаться
            </ButtonSubmit>
        </div>
        </form>
  )
}
