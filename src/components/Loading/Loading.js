import React from 'react'
import "./loading.css"
const Loading = () => {
  return (
    <div className='w-full h-[100vh] fixed bg-[#010101c8] flex items-center justify-center z-50'>
      <div className='spaner w-28 h-28 rounded-full border-8 border-[#ffffff50] border-t-white'></div>
    </div>
  )
}

export default Loading
