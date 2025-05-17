import { Button,Input,message } from 'antd'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {login} from '../functions/login'

const Login = () => {
     
    const navigate = useNavigate()

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[token,setToken] = useState("")

    const loginHandler = async()=>{
      try {
        const data = await login(email,password)
        setToken(data.data.token)
        // const protectedData = await accessProtected(token)
        navigate("/home")
        message.success("logged in successfully")
      } catch (error) {
        message.error(error)
      }
    }

    // const handleProtectedAccess = async()=>{
    //   try {
    //     const data = await accessProtected(token)
    //     navigate("/")
    //   } catch (error) {
    //     message.error(error)
    //   }
    // }


  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-gray-800 text-3xl text-center font-bold mb-6">Login</h1>
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Enter your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-gray-50"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Enter your Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-gray-50"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-6 flex flex-col justify-center">
          <Button color='primary' variant='solid' onClick={loginHandler}>Login</Button>
          <p className='text-gray-800 text-md mt-2'>Don't have an account? <Link to={"/signup"} className='text-blue-500'>Signup</Link></p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login
