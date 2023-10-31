import { useState } from 'react';
import './App.css'
import Main from './components/Main/Main'
import NavSide from './components/NavSide/NavSide'
import ShowMuscle from './components/ShowMuscle/ShowMuscle'

function App() {
  const [dataForComponentA, setDataForComponentA] = useState("");
  const handleDataUpdate = (data) => {
    setDataForComponentA(data);
  };
  return (
    <div className='containerMain'>
      <NavSide />
      <Main onDataUpdate={handleDataUpdate} />
      <ShowMuscle  data={dataForComponentA} />
    </div>
  )
}

export default App
