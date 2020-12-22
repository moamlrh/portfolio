import React, { useEffect } from 'react'
import "./App.css"
import LeftSide from './Components/left-side/LeftSide'
import RightSide from './Components/right-side/RightSide'

export default function App() {
  useEffect(() => {
    const left = document.querySelector('.left-side-app')
    const right = document.querySelector('.right-side-app')
    window.addEventListener('load', e => {
      left.style.left = '0'
      left.style.position = 'relative'
      right.style.right = '0';
      right.style.position = 'relative'
    })
  }, [])
  return (
    <div className="app">
      <div className="left-side-app">
        <LeftSide />
      </div>
      <div className="right-side-app">
        <RightSide />
      </div>
    </div>
  )
}
