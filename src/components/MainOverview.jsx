import React from 'react'
import VisionNew from './Vision2'
import Mission from './Mission'
import OurValue from './OurValue'
import AboutUs from '../pages/AboutUs'


const MainOverview = () => {
  return (
    <div className='overflow-x-hidden'>
        <AboutUs/>
        <VisionNew/>
        <Mission/>
        <OurValue/>

    </div>
  )
}

export default MainOverview