import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import TextArea from '../../components/TextArea/TextArea'
import { ROUTES } from '../../routes/RouterConfig'

const Home = () => {

    const navigate = useNavigate()

    const changeDir = (dir) =>{
        navigate(dir)
    }

  return (
    <div className='Home'>
      <Button/>
      <TextArea/>
    </div>
  )
}

export default Home