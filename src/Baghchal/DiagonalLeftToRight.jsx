import React from 'react'
import './../App.css'

const DiagonalLeftToRight = () => {
    
  return (
    <>
    {/* <div class="line"></div> */}
    {/* <div className='diagonal-left-to-right'></div> */}
    <div className=' p-1 hover:bg-red-400 bg-gray-400 w-44 h-1 -mb-4 z-0 rotate-45 translate-x-7 translate-y-4 scale-x-150 origin-left '
    style={{
        transform: [{ scaleX: 2 }],
        // transform:[{origin:"Left"}],
        // transform: [{ rotate: "45deg" }]
    }}
     > 
    </div>
    </>
  )
}
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1
//     },
//     scrollContentContainer: {
//       alignItems: "center",
//       paddingBottom: 60
//     },
//     line: {
//         width:"44px",
//       alignItems: "center",
//       justifyContent: "center"
//     },
// }

export default DiagonalLeftToRight