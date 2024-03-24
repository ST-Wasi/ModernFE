import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => <div key={index} className="masker">
          <div className='w-fit flex items-end overflow-hidden'>
            {index === 1 && <div className='mr-[1vw] w-[8vw] rounded-md h-[5.7vw] -top-[1.2vw] relative bg-green-500'></div>}
          <h1 className="pt-[2vw] -mb-[1vw] uppercase font-['Founders_Grotesk'] text-[9vw] leading-[7vw] tracking-tighter">{item}</h1>
          </div>
        </div>)}

      </div>
      <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
        {["For Public and Private Companies", "From The First Pitch to IPO"].map((item, index) => <p key={index} className='text-md font-light tracking-tigh leading-none'>{item}</p>)}
        <div className="start flex items-center gap-5">
          <div className='px-5 py-2 border-2 border-zinc-400 rounded-full font-light text-md capitalize'>Start the Project</div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-zinc-400">
            <span className='rotate-[45deg]'>
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
