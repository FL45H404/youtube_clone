import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { closeMenu } from '../features/menuSlice'
import { addQuery } from '../features/searchSlice'

const Sidebar = () => {
  const isShowing=useSelector((state)=>state.menu.isMenuOpen)
  const dispatch=useDispatch()
  if (isShowing) return null
  return (
    <div className='p-5 mt-16 shadow-lg w-48 h-screen fixed overflow-hidden overflow-y-auto bg-white left-0 border border-r' onClick={()=>dispatch(closeMenu())}>
      <ul>
      <Link to='/' ><li className='cursor-pointer border-b p-1 hover:bg-gray-300' onClick={()=>dispatch(addQuery(''))}> Home</li></Link>
      <Link to='/' ><li className='cursor-pointer border-b p-1 hover:bg-gray-300' onClick={()=>dispatch(addQuery('shorts'))}>Shorts</li></Link>
      <Link to='/' ><li className='cursor-pointer border-b p-1 hover:bg-gray-300' onClick={()=>dispatch(addQuery('videos'))}>Videos</li></Link>
      <Link to='/' ><li className='cursor-pointer border-b p-1 hover:bg-gray-300' onClick={()=>dispatch(addQuery('live'))}>Live</li></Link>
    </ul>
    <h1 className='font-bold pt-5'>Subscription</h1>
      <ul>
      <Link to='/' ><li className='cursor-pointer border-b p-1 hover:bg-gray-300' onClick={()=>dispatch(addQuery('music'))}>Music</li></Link>
      <Link to='/' ><li className='cursor-pointer border-b p-1 hover:bg-gray-300' onClick={()=>dispatch(addQuery('sports'))}>Sports</li></Link>
      <Link to='/' ><li className='cursor-pointer border-b p-1 hover:bg-gray-300' onClick={()=>dispatch(addQuery('gaming'))}>Gaming</li></Link>
      <Link to='/' ><li className='cursor-pointer border-b p-1 hover:bg-gray-300' onClick={()=>dispatch(addQuery('movies'))}>Movies</li></Link>
      </ul>
    <h1 className='font-bold pt-5'>Watch later</h1>
      <ul>
      <Link to='/' ><li className='cursor-pointer border-b p-1 hover:bg-gray-300' onClick={()=>dispatch(addQuery('food'))}>Food</li></Link>
      <Link to='/' ><li className='cursor-pointer border-b p-1 hover:bg-gray-300' onClick={()=>dispatch(addQuery('cooking'))}>Cooking</li></Link>
      <Link to='/' ><li className='cursor-pointer border-b p-1 hover:bg-gray-300' onClick={()=>dispatch(addQuery('news'))}>News</li></Link>
      <Link to='/' ><li className='cursor-pointer border-b p-1 hover:bg-gray-300' onClick={()=>dispatch(addQuery('random'))}>Surprice</li></Link>
      </ul>
    
    </div>
  )
}

export default Sidebar