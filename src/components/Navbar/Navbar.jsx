import React from 'react'
import logo from '../../assets/images/cat.png'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className="topbar sticky top-0 z-[100]">
            <div className=" sticky mx-auto ">
                <div className=" min-h-[120px] px-5 flex flex-row justify-center items-center w-full h-full">
                    <a href="https://github.com/CatalystsReachOut" ><img src={logo} alt="" className='w-[110px]'/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar