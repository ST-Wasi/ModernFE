import React from 'react'

const About = () => {
  return (
    <div className='w-ful p-20 bg-[#CDEA68] rounded-t-3xl text-black'>
      <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className="w-full flex gap-5 border-t-[1px] mt-20 pt-12 border-[#a1b562]">
        <div className="w-1/2">
          <h1 className='text-7xl'>Our approach:</h1>
          <button className='flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 rounded-full text-white mt-10'>Read More
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
          </button>
        </div>
        <div className="w-1/2 h-[65vh] rounded-3xl bg-[#8b9c4c]"></div>
      </div>
    </div>
  )
}

export default About
About