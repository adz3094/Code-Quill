import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import React from 'react'
import { useAppContext } from '../context/AppContext';

const Navbar = () => {

    const {navigate, token} = useAppContext()

  return (
    <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32">
        <img onClick={()=>navigate('/')} src= {assets.codequill} alt='Logo' className='w-36 sm:w-55 cursor-pointer -z-2'></img>
        <button onClick={()=>navigate('/admin')} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'>{token ? 'Dashboard' : 'Login'}
            <img src={assets.arrow} className='w-3' alt='Arrow' />
        </button>
    </div>
  )
}

export default Navbar