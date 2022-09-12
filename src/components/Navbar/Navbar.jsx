import React from 'react'
import logo from '../../assets/images/catalyst.png'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className="topbar h-[120px] sticky top-0 z-[100]">
            <div className=" sticky top-16 w-full mx-auto px-24 md:top-40 md:px-40 xl:px-0 xl:max-w-[1120px] h-[80px] z-50">
                <div className="bg-[black] rounded-full px-20 flex flex-row justify-between items-center w-full h-full">
                    <img src={logo} alt="" className='w-[70px]'/>
                    <div className='text-[#D03EDD]'>Catalysts Clipboard</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar