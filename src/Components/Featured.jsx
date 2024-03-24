import React from 'react'

const Featured = () => {
    return (
        <div className='w-full py-20'>
            <div className='w-full px-20  border-b-[1px] pb-20 border-zinc-700'>
                <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>Featured projects</h1>
            </div>
            <div className="px-20">
                <div className="flex gap-10 cards w-full mt-20">
                    <div className="cardcontainer w-1/2 h-[80vh] rounded-2xl bg-red-500">
                        <div className="card w-full h-[80vh] rounded-2xl overflow-hidden">
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                        </div>
                    </div>
                    <div className="cardcontainer w-1/2 h-[80vh] rounded-2xl bg-red-500">
                        <div className="card w-full h-full rounded-2xl overflow-hidden">
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
