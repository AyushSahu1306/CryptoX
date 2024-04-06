import React from 'react'
import { BG_IMG } from '../utils/constant'
import Carousel from './Carousel'
import CoinsTable from './CoinsTable'
const Banner = () => {
  return (
    <div>
      <img src={BG_IMG} className='h-[60vh] w-full object-cover '></img>   
        <div className='absolute z-1 left-[40vw] top-[100px]'>
            <h1 className='text-7xl font-bold mx-10 my-5'>CryptoX</h1>
            <h2 className='font-light'>Get All The Info Regarding Your Favourite Crypto Currency</h2>
        </div>
            <Carousel/>
            <CoinsTable/>
    </div>
  )
}

export default Banner