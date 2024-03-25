import React from 'react'
import { motion } from 'framer-motion'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-10 bg-[#004D43] rounded-t-3xl'>
      <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap">
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 10 }} className='text-[22vw] leading-none font-["Founders_Grotesk"] font-semibold uppercase -mb-[7vw] pt-10 pr-10'>We Are Ochi</motion.h1>
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 10 }} className='text-[22vw] leading-none font-["Founders_Grotesk"] font-semibold uppercase -mb-[7vw] pt-10'>We Are Ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
