import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen flex items-center px-20 gap-5'>
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full border-2">&copy;2019</button>
        </div>
      </div>
      <div className="cardcontainer relative flex gap-5 w-1/2 h-[50vh]">
        <div className="card flex items-center justify-center rounded-xl w-1/2 h-full bg-[#004D43]">
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full border-2">&copy;2019</button>
        </div>
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#004D43]">
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full border-2">&copy;2019</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
