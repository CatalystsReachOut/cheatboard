import React, { useState } from 'react'
import { useEffect } from 'react'
import logo from './../../assets/images/cat.png'

const Splash = () => {

    const [loading, setLoading] = useState('0%')

    useEffect(()=>{
            setLoading('100%')
    },[])
  return (
    <div className='flex justify-center align-center h-[100vh] w-[100vw]'>
        <div className='flex flex-col justify-center align-center gap-8'>
            <img src={logo} className='w-[20vw] h-[20vw] mx-auto ' alt="" />
            <div className='loader w-[30vw] '>
                <div className={`transition-width duration-[2000ms] ease bg-gradient-to-r from-[#CB6BE6] to-[#FB67C5] rounded h-[6px] drop-shadow-2xl`} style={{width:loading}}></div>
            </div>
        </div>
    </div>
  )
}

export default Splash