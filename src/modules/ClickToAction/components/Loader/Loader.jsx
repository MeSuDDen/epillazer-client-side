import React from 'react'

import { Oval } from  'react-loader-spinner'

export default function Loader() {
  return (
    <Oval
        height={20}
        width={20}
        color="#143d3d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#fff"
        strokeWidth={6}
        strokeWidthSecondary={10}
    />
  )
}
