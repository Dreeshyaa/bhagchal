import React, {useState} from 'react'
import { Square } from './Square'


const TicBoard = () => {
    const[state,setState]= useState(Array(9).fill(null));

    const [isXTurn, setIsXTurn]= useState(true);

    const checkWinner=()=>{
        const winnerLogic =[
            [1,5,6],
            [0,6,2],
            [1,6,7,8,5],
            [2,8,4],
            [3,8,4],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for(let logic of winnerLogic){
            const [a,b,c]=logic;
            var movementLogic=[];
            if (state[a] !==null &&  state[a]===state[b] && state[a]===state[c]){  
                return state[a];
              }
            }
            switch (0) {
                case '0':
                    movementLogic.push([1,5,6]);
                    console.log(movementLogic);
                break;
                case '1':
                    movementLogic.push([0,6,2]);
                    break;
                case '2':
                    movementLogic.push([1,6,7,8,5]);
                    break;
                case '3':
                //   return <Lost handleClick={handleClick} />
                movementLogic.push([2,8,4]);
                break;
                default:
                  return null
              }
              
    };
    

    const isWinner = checkWinner();

    const handleClick=(index)=>{
        if(state[index] !==null){
            return;
        }
    const copyState =[...state];
    copyState[index]=isXTurn ? "x": "0";
    setIsXTurn(!isXTurn);
    setState(copyState);

    };
    const handleReset = () => {
        setState(Array(9).fill(null));   
     };
  return (
    <div className='max-w-md bg-pink-100 rounded-lg p-4 text-center'>
    {isWinner?( <><div className='text-red-600 font-semibold text-lg'>{isWinner} has Won the Game {" "}</div>
    <button className=" m-4 p-4 text-white bg-black rounded-lg" onClick={handleReset}> PlayAgain</button>
    </>) 
    : (
    <>
    <div className=' text-red-800 font-semibold text-lg mb-4'> Player {isXTurn? "x": "o"} please move</div>
    <div className='board-row text-red-800  font-bold text-lg '>
        <Square value={state[0]} onClick={()=> handleClick(0)} />
        <Square value={state[1]} onClick={()=> handleClick(1)}/>
        <Square value={state[2]} onClick={()=> handleClick(2)}/>
    </div>
    <div className='board-row text-red-800 font-bold text-lg'>
        <Square value={state[3]} onClick={()=> handleClick(3)}/>
        <Square value={state[4]} onClick={()=> handleClick(4)}/>
        <Square value={state[5]} onClick={()=> handleClick(5)}/>
    </div>
    <div className='board-row text-red-800 font-bold text-lg'>
        <Square value={state[6]} onClick={()=> handleClick(6)}/>
        <Square value={state[7]} onClick={()=> handleClick(7)}/>
        <Square value={state[8]} onClick={()=> handleClick(8)}/>
    </div>

    <button className=" m-4 p-4 text-white bg-black rounded-lg" onClick={handleReset}> Restart</button>
    </>
    )}
    </div>
   
  )
}

export default TicBoard