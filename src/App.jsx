import { useState } from 'react'
import Head from './Components/Head/Head'
import MyServices from './Components/MyServices/MyServices'

const App = () => {

  return (
    <div className='main'>
      <Head />
      <MyServices />
    </div>
  )
}

export default App