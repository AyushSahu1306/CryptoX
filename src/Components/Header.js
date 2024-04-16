import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { changeCurrency } from '../utils/currencySlice';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { removeUser } from '../utils/userSlice';

const Header = () => {
  const location = useLocation();
  // console.log(location.pathname)
  const navigate=useNavigate();

  const dispatch = useDispatch();
  const handleCurrency=(e)=>{
    dispatch(changeCurrency(e.target.value));
  }


  const handleSignout=()=>{
   console.log("hello")
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser());
      navigate("/");
    });
  }

  return (
    <div className='flex justify-between text-yellow-400  bg-gray-950'>
        <Link to="/" className={`${location.pathname=='/'? "mx-auto text-5xl mt-10 tracking-wider": "mx-48 mt-5 mb-4 font-bold text-2xl"}` }>CryptoX</Link>

        { location.pathname!='/'?
        <div className='py-4 px-48'>
          <select className='bg-gray-900 text-white border-2 rounded-md py-[7px] px-4 mx-4 text-lg hover:cursor-pointer' onChange={handleCurrency}>
            <option >INR</option>
            <option>USD</option>
            </select>
            <button className='bg-yellow-400 text-black rounded-md py-[7px] px-4 text-lg' onClick={handleSignout} >LOGOUT</button>
        </div>:""}
   </div>
  )
}

export default Header