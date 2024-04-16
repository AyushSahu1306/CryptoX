import React, { useState } from 'react'
import {auth} from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Banner from '../Components/Banner'
const HomePage = () => {
  
  const navigate=useNavigate();

  const [user,setuser]=useState(null);

  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (user) => {
       if (user) {
         // User is signed in, see docs for a list of available properties
         // https://firebase.google.com/docs/reference/js/auth.user
        //  const {uid,email,displayName,photoURL} = user;
        //  dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        //  navigate("/browse");
        setuser(user);
       } 
       else {
         // User is signed out
        //  dispatch(removeUser());
         navigate("/");
       }
     });
     return ()=>unsubscribe();
   },[])


  return (
    <div >
        {user && <Banner/>}
    </div>
  )
}

export default HomePage