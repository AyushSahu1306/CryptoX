import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeCurrency } from '../utils/currencySlice';


const Header = () => {

  const dispatch = useDispatch();
  const handleCurrency=(e)=>{
    dispatch(changeCurrency(e.target.value));
  }

  return (
    <div className='flex justify-between text-yellow-400  bg-gray-950'>
        <Link to="/" className='mx-48 mt-5 mb-4 font-bold text-2xl '>CryptoX</Link>

        <div className='py-4 px-48'>
            <select className='bg-gray-900 text-white border-2 rounded-md py-[7px] px-4 mx-4 text-lg' onChange={handleCurrency}>
            <option >INR</option>
            <option>USD</option>
            </select>
            <button className='bg-yellow-400 text-black rounded-md py-[7px] px-4 text-lg' >LOGIN</button>
        </div>
   </div>
  )
}

export default Header