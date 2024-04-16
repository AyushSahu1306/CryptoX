import React, { useCallback, useEffect,useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { TrendingCoins } from '../utils/constant';
import { useSelector } from 'react-redux';



const Carousel = () => {
  const [items, setItems] = useState([]);

  const currency=useSelector(store=>store.Currency.currency);
  
  
  const fetchTrendingCoins=async ()=>{
    // const url="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";
      const url=TrendingCoins(currency);
      const data=await fetch(url);
      
      const json= await data.json();

      const trending = json || [];
      // console.log("hi12");

      const carouselItems= trending.map((element,index)=>{
        return (
        <div 
          className='mx-[70px]'
          key={index}>
          <img src={element.image} className='w-[70px] h-20 object-cover'></img>
          <h1  className='ml-2'>{ element.name}</h1>
          <h1>{currency=="INR"?"₹" + element.current_price:"$" + element.current_price}</h1>
        </div>)
      });

      setItems(carouselItems);
      
    };

    useEffect(()=>{
   fetchTrendingCoins()
    },[currency]);

   


  return (
    <div className='w-[100vw] absolute top-[300px] left-[50px]'>
    
    <AliceCarousel 
                animationType="slide" 
                responsive={
                  {
                0: { items: 3 },
                768: { items: 4 },
                  }
              } 
                autoPlay={true} 
                autoPlayInterval={1500}  
                disableDotsControls 
                disableButtonsControls 
                infinite={true} 
               
                items={items}
                />
    </div>
  );
}
export default Carousel