import React from 'react'
const verticalAxis=["1","2","3","4","5"];
const horizantalAxis=["a","b","c","d","e"];

const Circle = (props) => {
    let board=[];
    for(let j=verticalAxis.length-1;j>=0;j--){
      for(let i=0; i<horizantalAxis.length;i++){
        board.push(<span className='tile '>
            <div className=" border-8 border-green-300 w-44 h-44">
            <div className=' hover:bg-red-400 bg-green-300 w-56 h-1 -mb-4 z-0 rotate-45  scale-x-105 origin-left '> </div>
            <div className=" circle bg-green-300 w-8 h-8 rounded-full -ml-3 -translate-y-2 -translate-x-2 hover:bg-red-500">
            {/* <img src="./tiger.png" className='scale-150'> */}
            [{verticalAxis[i]},{horizantalAxis[j]}]
            {/* </img> */}
            </div>
        </div>
    
          </span>)
      }
    }
  return (
    <>
    <div id="app">
    <div id="baghchalboard">
        {board}
        </div>
        </div>
    
    </>
  )
}


export default Circle