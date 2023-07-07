import React from 'react'
import {useDispatch} from 'react-redux'
import { addQuery } from '../features/searchSlice'
const ButtonList = () => {
  const dispatch=useDispatch()
  const btnList=['All','News','Cricket','Football','Music','Gaming','Songs','Dancing','Cooking','Food']
  return (
    <div className='flex overflow-hidden overflow-x-auto'>
    {btnList.map((item,index)=> <div key={index} onClick={()=>dispatch(addQuery(item==='All' ? 'recent' :item))} className='p-2 px-4 m-1 mx-2 rounded-md bg-gray-200 cursor-pointer hover:bg-gray-400'> {item}</div> )}
    </div>
  )
}

export default ButtonList