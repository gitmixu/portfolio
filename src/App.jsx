import { useState } from 'react'
import data from './data.json'
import Questions from './components/Questions/Questions'
import Home from './Pages/Home/Home'
import Info from './Pages/Info/Info'
import Contacts from './Pages/Contacts/Contacts'

const App = () => {
  const [question, setQuestion] = useState(0)
  const [info, setInfo] = useState(0)

  const  handleSelection = ( selection ) => {
    setQuestion(1)
    setInfo(selection)
  }

  const setPage = ( page ) => {
    setQuestion(page)
    setInfo(0)
  }

  return (
    <div className='main'>
      <div className="logo"><h1>DevsNDesigns</h1></div>
        <Questions number={question} infoColor={info}setpage={setPage} />
      


        { question === 0 && <Home selectionControl={handleSelection} infoControl={setInfo} /> }
        { question === 1 && <Info showInfo={info}  /> }
        { question === 2 && <Contacts /> }
    </div>
  )
}

export default App