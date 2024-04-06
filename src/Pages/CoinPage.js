import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { HistoricalChart, SingleCoin } from '../utils/constant';
import { obj } from '../utils/singlecoin';
import { useSelector } from 'react-redux';
import Chart from '../Components/Chart';
import singleChart from '../utils/singleChart';
import singlecoin from '../utils/singlecoin'
const CoinPage = () => {

  const {coinid}=useParams();
  const [coin,setcoin]=useState({});
  // console.log(coinid);
  const [historicdata,sethistoricdata]=useState();

  const [days,setDays]=useState(1);

  const currency=useSelector((store)=>store.Currency.currency);
  

  const fetchcoin=async ()=>{
    // console.log(days);
    const data2 = await fetch(HistoricalChart(coinid,days,"usd"));
    const data3= await data2.json();
    // const data2=singleChart;
    // const data3=data2;
    
    sethistoricdata(data3?.prices);
    console.log(days);
    console.log(historicdata);
  
    const data = await fetch(SingleCoin(coinid));
    // const data= singlecoin;
    const json = await data.json();
    // // const json=await data.json();
  
    setcoin(json);
  }

  useEffect(()=>{
    fetchcoin();
  },[days])

  const handleDays=(num)=>{
    setDays(num);
  }
  console.log(days);

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
       
      {historicdata?<Chart Data={historicdata} days={days}/>:""}

          <div className='flex justify-evenly p-4'>
              <button className={`${days===1 ? "bg-yellow-500 text-black":"bg-transparent text-white" } border-2 border-yellow-400 px-3 py-2 rounded-md`} onClick={()=>handleDays(1)}>24 hours</button>
              <button className={`${days===30 ? "bg-yellow-500 text-black":"bg-transparent text-white" } border-2 border-yellow-400 px-3 py-2 rounded-md`}  onClick={()=>handleDays(30)}>30 Days</button>
              <button className={`${days===90 ? "bg-yellow-500 text-black":"bg-transparent text-white" } border-2 border-yellow-400 px-3 py-2 rounded-md`}  onClick={()=>handleDays(90)}>3 Months</button>
              <button className={`${days===365 ? "bg-yellow-500 text-black":"bg-transparent text-white" } border-2 border-yellow-400 px-3 py-2 rounded-md`}  onClick={()=>handleDays(365)}>1 Year</button>
          </div>
         
      </div>
    </div>

  )
}

export default CoinPage