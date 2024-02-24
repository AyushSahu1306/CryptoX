import React, { useState } from 'react'
import useCoinList from '../hooks/useCoinList'
import { CoinList } from "../utils/constant";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import AliceCarousel from 'react-alice-carousel';
import array from '../utils/coins';
import { Link } from 'react-router-dom';

const CoinsTable = () => {

  const [coinlist,setcoinlist]=useState([]);
  const currency=useSelector(store=>store.Currency.currency);

  const [length,setlength]=useState(0);
  const [page,setpage]=useState(1);
  const [number,setnumber]=useState(0);

  const fetchCoinList=async ()=>{
  //   const data =await fetch(CoinList(currency));
  //   const json = await data.json();
  //   console.log("hji");
  //   setcoinlist(json);  
  //   setnumber((json.length+9)/10);
  //  if(length==0)  setlength(length+1);
  setcoinlist(array);
   setnumber(Math.floor((array.length+9 ) / 10));
}

useEffect(()=>{
  if(length==0)  fetchCoinList();
  // setlength(length+1);
},[])
 
const handleclick=(e)=>{
  if(e.target.innerText==='>') {console.log(number); setpage(page+1>=number?number:(page+1));}
  else if(e.target.innerText==='<')  setpage(page-1<=1?1:(page-1));
  else setpage(e.target.innerText);
}

 

  return (
    <div className='m-3 mx-[180px] '>
        <h1 className='text-center text-4xl '>Cryptocurrency Prices by Market Cap</h1>
        <input placeholder='Search for a crypto currency' className='bg-transparent w-[100%] border-[1px] p-3 my-4'></input>
        <div className='grid grid-cols-12 bg-yellow-400 text-black p-3 text-[16px]'>
            <p className='col-span-7'>Coins</p>
            <p className='col-span-2'>Price</p>
            <p className='col-span-1'>24h Change</p>
            <p className='col-span-2 ml-12'>Market Cap</p>
        </div>
      
        {coinlist.slice(page*10-10,page*10).map((element)=>{
        return (
          <Link to={"/coin/"+element.id} className='grid grid-cols-12  text-white p-4 text-[16px] border-b border-gray-300 text-2xl '>
            <div className='col-span-7 flex'>
              <img src={element.image} className='w-14 mr-3' ></img>
              <div>
                <p className='text-[26px]'>{element.symbol.toUpperCase()}</p>
                <p className='text-[13px] -mt-2 text-gray-500'>{element.name}</p>
              </div>
            </div>
            <p className='col-span-2'>{currency==="INR"?"₹":"$"}{element.current_price.toFixed(2)}</p>
            <p className='col-span-1'>{Math.round((element.price_change_percentage_24h*1000))/1000 + "%"}</p>
            <p className='col-span-2 ml-12'>{currency==="INR"?"₹":"$"}{element.market_cap}M</p>
            
        </Link>
        )
       })}

    <div className="flex mx-[380px] my-2">
      <button onClick={handleclick}>&lt;</button>
      {Array.from({ length: Math.floor((coinlist.length + 9) / 10) }, (_, idx) => (
        <button key={idx} className='mx-3 text-lg' onClick={handleclick}>{idx+1}</button>
      ))}
      <button onClick={handleclick}>&gt;</button>
    </div>
        
    </div>
  )
}

export default CoinsTable;