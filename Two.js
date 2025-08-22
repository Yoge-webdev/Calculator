import React from 'react'
function Two({values,setValue}){
  return(
       <section className='two'>
        <button
       onClick={()=>setValue(pre=>pre+'4')}
        >4</button>    
        <button
      onClick={()=>setValue(pre=>pre+'5')}
        >5</button>     
        <button
     onClick={()=>setValue(pre=>pre+'6')}
        >6</button>  
        <button
        onClick={()=>setValue(pre=>pre+'-')}
        >-</button>
      </section>
  )
  
}
export default Two