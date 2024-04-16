//rafce
import React, { useRef, useState,useEffect } from 'react'
import {checkValidData} from "../utils/validate"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile,onAuthStateChanged} from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';


const Login = () => {

  const [isSignInForm,setisSigninForm]=useState(true);
  const [errormessage,seterrormessage]=useState(null);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const name =useRef(null);
  const email= useRef(null);
  const password= useRef(null);

  const toggleSignInForm=()=>{
    setisSigninForm(!isSignInForm);
  }

  const handleButtonClick=()=>{
    // validate the form data
    const message= checkValidData(email.current.value,password.current.value);
    // console.log(message);
    seterrormessage(message);

   if(message) return;

   //Sign up/Sign In

   if(!isSignInForm){
    //Sign up Logic
    createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
    .then((userCredential) => {
      
      const user = userCredential.user;
      updateProfile(user, {
        displayName: name.current.value, 
      }).then(() => {
        // Profile updated!
        const {uid,email,displayName} = auth.currentUser;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        navigate('/home')
      })
      .catch((error) => {
       seterrormessage(error.message)
      });
     
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      seterrormessage(errorCode+" "+errorMessage);
      
    });
   }

   else{
    //Sign in Logic
    signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const {uid,email,displayName} = auth.currentUser;
    dispatch(addUser({uid:uid,email:email,displayName:displayName}));
    // console.log(auth.currentUser);
    navigate('/home');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+" "+errorMessage);

  });
   }
  }
 

  const [popup,setpopup]=useState(false);
  // const dispatch = useDispatch();
  const user=useSelector(store=>store.user);

 

  return (
    <div className=''>
     

      {/* <div className='fixed'>
      <img alt="" aria-hidden="true" data-uia="nmhp-card-hero+background+image" src={BG_URL} className='h-screen md:h-full object-cover' ></img>
      </div> */}

      {/* u can use formik library to create forms in react */}

      <form onSubmit={(e)=>e.preventDefault()} className=" bg-gray-800 p-12  md:w-3/12 my-20 md:my-20 mx-auto  text-white rounded-lg bg-opacity-80 ">

        <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>

        {!isSignInForm && <input type='text' ref={name}  placeholder='Full Name' className='p-3 m-2 w-full text-black'></input>}

        <input ref={email} type='text' placeholder='Email Address' className='p-3 m-2 w-full text-black'></input>

        <input ref={password} type='password' placeholder='Password' className='p-3 m-2 w-full text-black'></input>

        <p className='text-yellow-600 px-3 text-[16px]'>{errormessage}</p>

        <button className='p-2 my-8 mx-2 bg-yellow-600 w-full rounded-lg'
         onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"}</button>
        <p className='py-4 hover:cursor-pointer font-bold' onClick={toggleSignInForm}>{isSignInForm?"New to CryptoX? Sign Up ":"Already registered? Sign In Now"}</p>
      

      </form >
      

    </div>
  )
}

export default Login