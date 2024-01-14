// ButtonSubmit.jsx
import React from 'react';
import './ButtonSubmit.scss';
import Loader from '../Loader/Loader';

export default function ButtonSubmit({ children, isLoading }) {
  return (
    <button className='buttonSubmit' disabled={isLoading}>
      {isLoading ? (
        <>
          <p>Загрузка</p>
          <Loader />
        </>
      ) : (
        children
      )}
    </button>
  );
}
