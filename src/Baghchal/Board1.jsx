import React, {useState} from 'react'
import Circle from './Circle'
import Line from './Line'
import VerticalLine from './VerticalLine'
import DiagonalLeftToRight from './DiagonalLeftToRight'
import DiagonalRightToLeft from './DiagonalRightToLeft'
import './../App.css'

const Board1 = () => {
  const[state,setState]= useState(Array(24).fill(null));

    const [isTigerTurn, setIsTigerTurn]= useState(true);
    const checkWinner=()=>{
      const winnerLogic =[
          [0,1,2],
          [3,4,5],
          [6,7,8],
          [0,3,6],
          [1,4,7],
          [2,5,8],
          [0,4,8],
          [2,4,6],
      ];
      for(let logic of winnerLogic){
          const [a,b,c]=logic;
          if (state[a] !==null &&  state[a]===null || state[a]===null){  
              return state[a]===null;
            }
          }
  };
  const handleClick=(index)=>{
    if(state[index] !==null){
      return;
    }
    const copyState=[...state];
    copyState[index]=isTigerTurn ? <img src='./tiger.png' className='scale-150'></img>: <img src="./goat.png" className='scale-150'></img>
    setIsTigerTurn(!isTigerTurn);
    setState(copyState);
  }
  const nextMove=()=>{
    const nextMove =[
        // for 0 =>[1,6,5]
       
    ];
    for(let logic of nextMove){
        const [a,b,c]=logic;
        if (state[a] !==null &&  state[a]===state[b] && state[a]===state[c]){  
            return state[a];
          }
        }
};
  return (
    <>

    <div className='flex justify-center'>
    <div className=' text-red-800 font-semibold text-lg mb-4'> Player {isTigerTurn? <img src='./tiger.png' className='scale-150 h-16 w-16'></img> : <img src="./goat.png" className='scale-150'></img>} please move</div>

    <div className='bg-green-200 p-10 rounded-lg max-w-5xl'>
        <div className='board-row1'>
            <div>
              
              <Line/>
              <DiagonalLeftToRight/>
              <Circle value={0}>
                {/* <div className="line -mb-6 -translate-y-12"></div> */}
              </Circle>
              <VerticalLine/>
            </div>

            <div>
              {/* <DiagonalLeftToRight/> */}
              <DiagonalRightToLeft/>
              <Line/>
              <Circle value={1}/>
              <VerticalLine/>
              {/* <Circle value={1}/> */}
            </div>
            <div>
              <Line/>
              <DiagonalLeftToRight/>

              <Circle value={2}/>
              <VerticalLine/>
            </div>
            <div>
              <Line/>
              <DiagonalRightToLeft/>
            <Circle value={3}/>
            <VerticalLine/>
            </div>
         
            <div >
            <Circle value={4}/>
            <VerticalLine/>
            </div>
        </div>
        
        <div className='board-row1'>
            <div>
              <Line />
              <DiagonalRightToLeft/>
              <Circle value={5}/>
              <VerticalLine/>
            </div>

            <div>
              <Line/>
              <DiagonalLeftToRight/>
              <Circle value={6}/>
              <VerticalLine/>
            </div>
            <div>
              <Line/>
              <DiagonalRightToLeft/>
            <Circle value={7}/>
            <VerticalLine/>
            </div>
            <div>
              <Line/>
              <DiagonalLeftToRight/>
            <Circle value={8}/>
            <VerticalLine/>
            </div>
         
            <div >
            <Circle value={9}/>
            <VerticalLine/>
            </div>
        </div>
        
        <div className='board-row1'>
            <div>
              <Line/>
              <DiagonalLeftToRight/>
              <Circle value={10} />
              <VerticalLine/>
            </div>

            <div>
              <Line/>
              <DiagonalRightToLeft/>
              <Circle value={11}/>
              <VerticalLine/>
            </div>
            <div>
              <Line/>
              <DiagonalLeftToRight/>
            <Circle value={12}/>
            <VerticalLine/>
            </div>
            <div>
              <Line/>
              <DiagonalRightToLeft/>
            <Circle value={13}/>
            <VerticalLine/>
            </div>
         
            <div >
            <Circle value={14}/>
            <VerticalLine/>
            </div>
        </div>
        
        <div className='board-row1'>
            <div>
              <Line/>
              <DiagonalRightToLeft/>
              <Circle value={15}/>
              <VerticalLine/>
            </div>

            <div>
              <Line/>
              <DiagonalLeftToRight/>
              <Circle value={16}/>
              <VerticalLine/>
            </div>
            <div>
              <Line/>
              <DiagonalRightToLeft/>
            <Circle value={17}/>
            <VerticalLine/>
            </div>
            <div>
              <Line/>
              <DiagonalLeftToRight/>
            <Circle value={18}/>
            <VerticalLine/>
            </div>
         
            <div >
            <Circle value={19}/>
            <VerticalLine/>
            </div>
        </div>
        
        <div className='board-row1'>
            <div>
              <Line/>
              <Circle value={20}/>
              
            </div>

            <div>
              <Line/>
              <Circle value={21}/>
              
            </div>
            <div>
              <Line/>
            <Circle value={22}/>
            
            </div>
            <div>
              <Line/>
            <Circle value={23}/>
            
            </div>
         
            <div>
            <Circle value={24}/>
            
            </div>
        </div>
    
    </div>
    </div>
   
    <body>


</body>
    </>
  )
}

export default Board1