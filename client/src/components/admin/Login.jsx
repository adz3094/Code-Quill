import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast';

const Login = () => {

  const {axios, setToken} = useAppContext();
    
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      const {data} = await axios.post('/api/admin/login', {email, password})

      if(data.success) {
        setToken (data.token)
        localStorage.setItem("token", data.token)
        axios.defaults.headers.common['Authorization'] = data.token;
      }
      else {
        toast.error(data.message)
      }
      
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className='flex items-center justify-center h-screen'>
  <div className='w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg'>
    <div className='w-full py-6'>
      <h1 className='text-3xl font-bold text-center'>
        <span className='text-primary'>Admin</span> Login
      </h1>
      <p className='font-light text-center mb-6'>Enter your credentials to access the admin panel</p>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <div className='flex flex-col'>
          <label className='text-sm font-semibold mb-1'> Email </label>
          <input onChange={e => setEmail(e.target.value)} value={email}
            type='email'
            required
            placeholder='your email id'
            className='border-b border-gray-200 p-1 outline-none placeholder:text-sm placeholder:font-light placeholder:text-gray-400'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-sm font-semibold mb-1'> Password </label>
          <input onChange={e => setPassword(e.target.value)} value={password} type='password'
            required
            placeholder='your password'
            className='border-b border-gray-200 p-1 outline-none placeholder:text-sm placeholder:font-light placeholder:text-gray-400'
          />
        </div>
        <button type="submit" className='w-full py-3 font-medium bg-primary text-white rounded cursor-pointer hover:bg-primary/90 transition-all'> Login </button>
      </form>
    </div>
  </div>
</div>

  )
}

export default Login