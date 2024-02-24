import { useEffect, useState } from "react";
import { CoinList } from "../utils/constant";
import { useSelector } from "react-redux";

const useCoinList=()=>{
    const [items,setitems]=useState([]);
// const currency=useSelector(store=>store.Currency.currency);



return items;

}

export default useCoinList;