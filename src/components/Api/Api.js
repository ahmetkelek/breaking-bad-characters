import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function Api() {
const[char,setChar]=useState([]);
const[loader,setLoader]=useState(false);



    const getCharRequest = async () => {
      setLoader(true);
      const getChar = await axios(`https://breakingbadapi.com/api/characters`)
      setChar(getChar.data)
      setLoader(false);
      }

    
useEffect(()=>{
  getCharRequest();
},[]);  

  return { char, setChar, loader}
}
