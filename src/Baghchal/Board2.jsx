import React, {useState} from 'react'
import Circle from './Circle'
import Line from './Line'
import VerticalLine from './VerticalLine'
import DiagonalLeftToRight from './DiagonalLeftToRight'
import DiagonalRightToLeft from './DiagonalRightToLeft'
import './../App.css'


const Board2 = () => {
  return (<>
  <div className='flex  justify-center '>
  <div className='flex flex-col m-5 p-10 bg-gray-200 rounded-lg justify-items-center' >
    <div className=' justify-items-center mb-4 p-4 '>
    <div className=' font-semibold text-2xl text-green-600 '>Baghchal Board</div>
    </div>
    <div className='flex flex-row'>
        <div className=" border-8 border-green-300 w-44 h-44">
            <div className=' hover:bg-red-400 bg-green-300 w-56 h-1 -mb-4 z-0 rotate-45  scale-x-105 origin-left '> </div>
            <div className=" circle bg-green-300 w-8 h-8 rounded-full -ml-3 -translate-y-2 -translate-x-2 hover:bg-red-500">
            <img src="./tiger.png" className='scale-150'></img>
            </div>
        </div>
        <div className="border-8 border-green-300 w-44 h-44 -translate-x-2">
            <div className=' hover:bg-red-400 bg-gray-400 w-56 h-1 -mb-4 z-0 -rotate-45 origin-right -translate-x-16  scale-x-105 '> </div>
            <div className="circle bg-green-300 w-8 h-8 rounded-full  -ml-3 -translate-y-2 -translate-x-2 hover:bg-red-500">
            <img src="./goat.png" className='scale-150'></img>
            </div>

        </div>
        <div className="border-8 border-green-300 w-44 h-44 -translate-x-4">
        <div className=' hover:bg-red-400 bg-gray-400 w-56 h-1 -mb-4 z-0 rotate-45   scale-x-105 origin-left '> </div>
            <div className="circle bg-green-300 w-8 h-8 rounded-full  -ml-3 -translate-y-2 -translate-x-2 hover:bg-red-500"></div>
        </div>
        <div className="border-8 border-green-300 w-44 h-44 -translate-x-6">
        <div className=' hover:bg-red-400 bg-gray-400 w-56 h-1 -mb-4 z-0 -rotate-45 origin-right -translate-x-16 scale-x-105 '> </div>
            <div className="circle bg-green-300 w-8 h-8 rounded-full  -ml-3 -translate-y-2 -translate-x-2 hover:bg-red-500"></div>

        </div>
        <div className='-translate-x-6 -translate-y-1 '>
          <div className="circle bg-green-300 w-8 h-8 rounded-full  -ml-3 -translate-y-2 -translate-x-2 hover:bg-red-500"></div>
        </div>
      </div>
      <div className='flex flex-row -translate-y-2'>
        <div className="border-8 border-green-300 w-44 h-44 ">
            <div className=' hover:bg-red-400 bg-gray-400 w-56 h-1 -mb-4 z-0 -rotate-45 origin-right -translate-x-16 scale-x-105 '> </div>
            <div className="circle bg-green-300 w-8 h-8 rounded-full  -ml-3 -translate-y-2 -translate-x-2 hover:bg-red-500">
              <img src="./tiger.png"></img>
            </div>
        </div>
        <div className="border-8 border-green-300 w-44 h-44 -translate-x-2">
            <div className=' hover:bg-red-400 bg-gray-400 w-56 h-1 -mb-4 z-0 rotate-45   scale-x-105 origin-left '> </div>
            <div className="circle bg-green-300 w-8 h-8 rounded-full  -ml-3 -translate-y-2 -translate-x-2 hover:bg-red-500"></div>
        </div>
        <div className="border-8 border-green-300 w-44 h-44 -translate-x-4">
            <div className=' hover:bg-red-400 bg-gray-400 w-56 h-1 -mb-4 z-0 -rotate-45 origin-right -translate-x-16 scale-x-105 '> </div>
            <div className="circle bg-green-300 w-8 h-8 rounded-full  -ml-3 -translate-y-2 -translate-x-2 hover:bg-red-500"></div>
            
        </div>
        <div className="border-8 border-green-300 w-44 h-44 -translate-x-6">
            <div className=' hover:bg-red-400 bg-gray-400 w-56 h-1 -mb-4 z-0 rotate-45   scale-x-105 origin-left '> </div>
            <div className="circle bg-green-300 w-8 h-8 rounded-full  -ml-3 -translate-y-2 -translate-x-2 hover:bg-red-500"></div>
        </div>
        <div className='-translate-x-6 -translate-y-1 '>
          <div className="circle bg-green-300 w-8 h-8 rounded-full  -ml-3 -translate-y-2 -translate-x-2 hover:bg-red-500"></div>
        </div>

      </div >
      <div className='flex flex-row -translate-y-4'>
      <div className="border-8 border-green-300 w-44 h-44">
            <div className=' hover:bg-red-400 bg-gray-400 w-56 h-1 -mb-4 z-0 rotate-45  scale-x-105 origin-left '> </div>
            <div className="circle bg-green-300 w-8 h-8 rounded-full  -ml-3 -translate-y-2 -translate-x-2 hover:bg-red-500"></div>
        </div>
        <div className="border-8 border-green-300 w-44 h-44 -translate-x-2">
            <div className=' hover:bg-red-400 bg-gray-400 w-56 h-1 -mb-4 z-0 -rotate-45 origin-right -translate-x-16 scale-x-105 '> </div>
            <div className="circle bg-green-300 w-8 h-8 rounded-full  -ml-3 -translate-y-2 -translate-x-2 hover:bg-red-500"></div>

        </div>
        <div className="border-8 border-green-300 w-44 h-44 -translate-x-4">
        <div className=' hover:bg-red-400 bg-gray-400 w-56 h-1 -mb-4 z-0 rotate-45   scale-x-105 origin-left '> </div>
            <div className="circle bg-green-300 w-8 h-8 rounded-full  -ml-3 -translate-y-2 -translate-x-2 hover:bg-red-500"></div>
        </div>
        <div className="border-8 border-green-300 w-44 h-44 -translate-x-6">
        <div className=' hover:bg-red-400 bg-gray-400 w-56 h-1 -mb-4 z-0 -rotate-45 origin-right -translate-x-16 scale-x-105 '> </div>
            <div className="circle bg-green-300 w-8 h-8 rounded-full  -ml-3 -translate-y-2 -translate-x-2 hover:bg-red-500"></div>

        </div>
        <div className='-translate-x-6 -translate-y-1 '>
          <div className="circle bg-green-300 w-8 h-8 rounded-full  -ml-3 -translate-y-2 -translate-x-2 hover:bg-red-500"></div>
        </div>
      </div>
        <div className='flex flex-row -translate-y-6'>
       
        <div className='flex flex-col'>
        <div className="border-8 border-green-300 w-44 h-44 ">
            <div className=' hover:bg-red-400 bg-gray-400 w-56 h-1 -mb-4 z-0 -rotate-45 origin-right -translate-x-16 scale-x-105 '> </div>
            <div className="circle bg-green-300 w-8 h-8 rounded-full  -ml-3 -translate-y-2 -translate-x-2 hover:bg-red-500"></div>
        </div>
        <div className="circle bg-green-300 w-8 h-8 rounded-full  -ml-3 -translate-y-5  hover:bg-red-500"></div>
        </div>
        <div className='flex flex-col'>
        <div className="border-8 border-green-300 w-44 h-44 -translate-x-2">
            <div className=' hover:bg-red-400 bg-gray-400 w-56 h-1 -mb-4 z-0 rotate-45   scale-x-105 origin-left '> </div>
            <div className="circle bg-green-300 w-8 h-8 rounded-full  -ml-3 -translate-y-2 -translate-x-2 hover:bg-red-500"></div>
        </div>
        <div className="circle bg-green-300 w-8 h-8 rounded-full  -ml-3 -translate-y-5 -translate-x-2 hover:bg-red-500"></div>
        </div>
        <div className='flex flex-col'>
        <div className="border-8 border-green-300 w-44 h-44 -translate-x-4">
            <div className=' hover:bg-red-400 bg-gray-400 w-56 h-1 -mb-4 z-0 -rotate-45 origin-right -translate-x-16 scale-x-105 '> </div>
            <div className="circle bg-green-300 w-8 h-8 rounded-full  -ml-3 -translate-x-2 -translate-y-2  hover:bg-red-500"></div>
            
        </div>
        <div className="circle bg-green-300 w-8 h-8 rounded-full  -ml-3 -translate-y-5 -translate-x-4 hover:bg-red-500"></div>
        </div>
        <div className='flex flex-col'>
        <div className="border-8 border-green-300 w-44 h-44 -translate-x-6">
            <div className=' hover:bg-red-400 bg-gray-400 w-56 h-1 -mb-4 z-0 rotate-45   scale-x-105 origin-left '> </div>
            <div className="circle bg-green-300 w-8 h-8 rounded-full  -ml-3 -translate-y-2 -translate-x-2 hover:bg-red-500"></div>
        </div>
        <div className="circle bg-green-300 w-8 h-8 rounded-full  -ml-3 -translate-y-5  -translate-x-6 hover:bg-red-500"></div>
        </div>
        <div className='flex flex-col'>
        <div className='-translate-x-6 -translate-y-1 '>
          <div className="circle bg-green-300 w-8 h-8 rounded-full  -ml-3 -translate-y-2 -translate-x-2 hover:bg-red-500"></div>
        </div>
        <div className="circle bg-green-300 w-8 h-8 rounded-full  mt-36 -translate-y-5 -translate-x-11  hover:bg-red-500"></div>
        </div>
      </div >
      
     
    </div>
    
    </div>
</>

  )
  }

export default Board2