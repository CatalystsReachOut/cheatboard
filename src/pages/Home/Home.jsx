import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import TextArea from '../../components/TextArea/TextArea'
import { ROUTES } from '../../routes/RouterConfig'
import { CODE, FETCH_CODE } from '../../utils/apiConstants'
import axios from 'axios'

const Home = () => {

  const [text, setText] = useState()
  const [code, setCode] = useState()

  const [getCode, setGetCode] = useState()
  const [data, setData] = useState()


    const handleSubmit = async() =>{
      if(!text) return alert('Text is required')
      const config={
        method:'post',
        url:FETCH_CODE,
        data:{
          text:text
        }
      }

      await axios(config)
      .then(res=>{
        console.log(res);
        setGetCode(res.data.code)
      })
      .catch(err=>{
        alert(err)
        console.log(err);
      })
    }

    const handleGetData = async() =>{
      if(!code) return alert('Code is required to fetch data')
      const config={
        method:'get',
        url:`${FETCH_CODE}?cheatcode=${code}`,
      }

      await axios(config)
      .then(res=>{
        console.log(res);
        setData(res.data.data)
      })
      .catch(err=>{
        alert(err)
        console.log(err);
      })
    }

  return (
    <div className='Home font-poppins px-[50px] max-w-[1000px] m-auto mt-[10px]'>
      <div className='p-5 my-3 bg-[white]'>
        <TextArea 
        placeholder={'Enter Message Here'} 
        className={'w-full p-[20px] rounded-lg'}
        value={text}
        onChange={(e)=>{setText(e.target.value)}}
        />
        <div className="flex justify-between">
        <Button 
        title={'Send above text to Online Clipboard'}
        handleClick={()=>handleSubmit()}
        />
        {
          getCode 
          &&
          <div>Your Code: {getCode}</div>
        }
        </div>
          
      </div>

      <div 
      className='p-5 my-3 bg-[white] mt-3 flex flex-col'
      
      >
        <div className="flex gap-[10px] mb-[15px] ">
        <input 
        type="text"
        className='border border-[#D03EDD] border-[2px] rounded'
        value={code}
        onChange={(e)=>{setCode(e.target.value)}}
        />
        <Button 
        title={'Get Data'}
        handleClick={handleGetData}
        />
        </div>
        <TextArea 
        placeholder={'Enter Message Here'} 
        className={'w-full p-[20px] rounded-lg'}
        value={data}
        />
      </div>
    </div>
  )
}

export default Home