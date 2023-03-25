// import React, {useRef} from 'react'

// import'./../../App.css'
// import './board.css'
// import Circle from './Circle';
// const verticalAxis=["1","2","3","4","5"];
// const horizantalAxis=["a","b","c","d","e"];

// interface Piece{
//   image:string
//   x:number
//   y:number
// }
// const pieces: Piece[]=[];

// pieces.push({image:"tiger.png", x:0,y:0})    
// pieces.push({image:"tiger.png", x:4,y:0})    
// pieces.push({image:"tiger.png", x:0,y:4})    
// pieces.push({image:"tiger.png", x:4,y:4})
// const activePieceRef = useRef(null);

//   function grabPiece(e){
//     const element=e.target;
//     if (element.classList.contains("baghchal-piece")){
//     // console.log(e);
//     const x= e.clientX -50;
//     const y=e.clientY -50;
//     element.style.position="absolute";
//     element.style.left=`${x}px`;
//     element.style.top=`${y}px`;
//     activePieceRef.current = element;
//     }

//   }

//   function movePiece(e){
//     // const element=e.target as HTMLElement;
//     if (activePiece){
//     // console.log(activePiece);

//       const x= e.clientX -50;
//       const y=e.clientY -50;
//       activePiece.style.position="absolute";
//       activePiece.style.left=`${x}px`;
//       activePiece.style.top=`${y}px`;

//     }
//   }
//   function dropPiece(e){
//     if(activePiece){
//       activePiece=null;
//     }

//   }    

// const NewBoard = () => {
//     let board=[];
//     for(let j=verticalAxis.length-1;j>=0;j--){
//       for(let i=0; i<horizantalAxis.length;i++){
     
//      let image=undefined;
//      const number =j+i+2;
//     pieces.forEach(p=>{
//       if(p.x===i && p.y===j){
//         image= p.image;
//       }
//     });
//      board.push(<Tile key={`${i},${j}`} image={image} number={number}/>)

//       }
//     }

//   return (
//   <>
//   <div id="app">
//     <div id="baghchalboard"
//     onMouseMove={(e)=>movePiece(e)}
//     onMouseDown={e=>grabPiece(e)}
//     onMouseUp={e=>dropPiece(e)}>
//     {board}
   
//     </div>

//   </div>
  
   
//      </>)
// }

// export default NewBoard