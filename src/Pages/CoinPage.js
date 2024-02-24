import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SingleCoin } from '../utils/constant';
import { obj } from '../utils/singlecoin';
import { useSelector } from 'react-redux';

const CoinPage = () => {

  const {coinid}=useParams();
  const [coin,setcoin]=useState({});
  // console.log(coinid);
  const [historicdata,sethistoricdata]=useState();

  const currency=useSelector((store)=>store.Currency.currency);
  

  const fetchcoin=async ()=>{
    const data2 = await fetch(SingleCoin(coinid));
    sethistoricdata(data2);
    const data = obj;
    // const json=await data.json();
    // console.log(data);
    setcoin(data);
  }

  useEffect(()=>{
    fetchcoin();
  },[])

  return (
    <div className='grid grid-cols-10'>

      <div className='col-span-3 border-r-2 border-r-gray-700  text-justify p-4'>

         
          <img src={coin?.image?.large} className='m-auto w-[200px]' ></img>
          <p className='mx-[135px] my-4 text-5xl font-bold'>{coin.localization?.en}</p>
          <p className='leading-8 text-xl'>{coin?.description?.en.split('.')[0]}.</p>

          <div className='text-2xl font-bold '>

            <div className='my-2'>
            <span>Rank: </span>
            <span >{coin?.market_cap_rank}</span>
            </div>
          
            <div>
            <span >Current Price: </span>
            <span>{currency==="INR"?"₹ ":"$ "}{coin?.market_data?.current_price[currency.toLowerCase()]}</span>  
            </div>
          
            <div className='my-2'>
            <span >Market Cap: </span>
            <span>{currency==="INR"?"₹ ":"$ "}{coin?.market_data?.market_cap[currency.toLowerCase()]}</span>  
            </div>
          
          </div>

          <button className='bg-yellow-600 text-black px-[130px] py-2 rounded-md text-xl font-light'>Add to Watchlist</button>

      </div>

      <div className='col-span-6'>
       
      </div>

    </div>

  )
}

export default CoinPage