import { Button,Input,message } from 'antd'
import React, { useState } from 'react'
import { signup } from '../functions/signup'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

  const[firstName,setFirstName] = useState("")
  const[lastName,setLastName] = useState("")
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const navigate = useNavigate()

  const handleSignup = async ()=>{
     try {
      const userData = {email: email , password: password , firstName: firstName , lastName: lastName}
      const data = await signup(userData)
      message.success("user created")
      navigate("/")
     } catch (error) {
      message.error(error.error)
     }
  }

  return (
    <div>
       <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-gray-800 text-3xl text-center font-bold mb-6">Sign Up</h1>
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Enter your First Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-gray-50"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Enter your Last Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-gray-50"
            onChange={(e) => setLastName(e.target.value)}
          />
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
          <Button color='primary' variant='solid' onClick={handleSignup}>Signup</Button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Signup
