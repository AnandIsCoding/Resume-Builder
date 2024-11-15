import React from 'react'
import Banner from './components/Banner'
import Inputcontainer from './components/Inputcontainer'
import ReactToPrint from 'react-to-print'

function App() {
  const allSections = {
    basicInfo : "Basic Info",
    workExperience: "Work Experience",
    project:"Projects",
    education: "Education",
    achievments:"Achievements",
    skills:"Skills",
    about:"About"
  }
  
  return (
    <div className='text-white text-xl font-bold'>
      <Banner/>
      <Inputcontainer allSections={allSections}/>
    </div>
  )
}

export default App
