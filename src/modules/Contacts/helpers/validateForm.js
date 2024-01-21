export const validateName = (name, setNameError) => {
    if (name.trim() === '') {
      setNameError('Пожалуйста, введите ваше имя');
      return false; // Возвращаем false, так как поле не прошло валидацию
    }
    return true; // Возвращаем true, если валидация прошла успешно
  }
  
  export const validatePhone = (phone, setPhoneError) => {
    if (phone.trim() === '') {
      setPhoneError('Пожалуйста, введите ваш номер телефона');
      return false; // Возвращаем false, так как поле не прошло валидацию
    }
    return true; // Возвращаем true, если валидация прошла успешно
  }
  