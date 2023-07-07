import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { toggleMenu } from '../features/menuSlice'
import { SEARCH_SUGGESTION } from '../utils'
import { addQuery } from '../features/searchSlice'


const Head = () => {
  const dispatch=useDispatch()
  const [searchText,setSearchText]=useState('')
  const [searchData,setSearchData]=useState([])
  const [showSuggetion,setShowSuggetion]=useState(false)
  const togglemenu=()=>{
    dispatch(toggleMenu())
  }
  const fetchSuggest=async()=>{
    const res=await fetch(SEARCH_SUGGESTION+searchText)
    const data=await res.json()
    setSearchData(data[1])
}
  useEffect(()=>{
  const timer=setTimeout(()=>fetchSuggest(),300)
  return ()=>{
    clearTimeout(timer)
  }
},[searchText])
const submitText=(e)=>{
  e.preventDefault()
  dispatch(addQuery(searchText))
  setShowSuggetion(false)
  setSearchText('')

}
  return (
    <div className='fixed flex justify-around p-2 pt-4 shadow-lg w-full z-20 bg-white md:grid grid-flow-col '>
      <div className='flex col-span-1'>
        <img className='h-8 cursor-pointer' onClick={()=>{
          togglemenu()
        }} 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png" alt="menu" />
        
        <img className='h-8 mx-2' 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png" 
        alt="youtube-logo" />
        
      </div>
      <div className='col-span-10 flex justify-center  mr-20 mb-2'>
      <form className=' flex justify-center w-full' onSubmit={(e)=>submitText(e)}>
        <input 
        className='relative border border-gray-400 p-2 rounded-l-full w-full md:w-1/2 ' 
        type="text" 
        value={searchText}
        onFocus={()=>setShowSuggetion(true)}
        //onBlur={()=>setShowSuggetion(false)}
        onChange={(e)=>setSearchText(e.target.value)}
        />
        <button className='border border-gray-400 p-2 rounded-r-full'>🔍</button>
        </form>
        <div className='absolute top-16 mr-14 bg-white w-[33%] rounded-lg border border-gray-100 '>
        <ul className=''>
        { showSuggetion && searchData.map((item)=> <li key={item} onClick={()=>{
          setSearchText('')
          dispatch(addQuery(item))
          setShowSuggetion(false)
        }} className='cursor-pointer border-b p-2 shadow-sm hover:bg-gray-200'>{item}</li>)}
         
        </ul>     
      </div>  
      </div>
      
      <div className='col-span-1'>
      <img className='h-8'
      src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" 
      alt="userlogo" />
      </div>
    </div>
  )
}

export default Head