import React from 'react';

import './style.scss'

import Container from '../../components/layout/Container/Container';
import Title from './components/Title/Title';
import SubTitle from './components/SubTitle/SubTitle';
import FormForSmtp from './components/FormForSmtp/FormForSmtp';

import { Toaster } from 'react-hot-toast';

export default function ClickToAction() {

  return (
    <div className='CtaBlock'>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Container>
        <div className='CtaBlockInner'>
          <div className='TitleContent'>

            <Title>Скидка 20%</Title>
            <SubTitle>новым клиентам на любую услугу при записи онлайн</SubTitle>

          </div>

          <FormForSmtp/>

        </div>
      </Container>
    </div>
  )
}
