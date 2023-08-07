import React from 'react'
import '../style/MainArea.scss'
import BreadCrumb from './BreadCrumb'

const MainArea = () => {
  return (
   <div className="main-area-container">
     <BreadCrumb/>
      <p className="mainarea">
      MainArea
      </p>
   </div>
  )
}

export default MainArea