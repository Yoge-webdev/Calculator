import React from 'react'
function Three({values,setValue}){
  return(
       <section className='three'>
        <button
         onClick={()=>setValue(pre=>pre+'7')}
        >7</button>     
        <button 
        onClick={()=>setValue(pre=>pre+'8')}
         >8</button>     
        <button 
       onClick={()=>setValue(pre=>pre+'9')}   
        >9</button>    
        <button
           onClick={()=>setValue(pre=>pre+'+')}
        >+</button>
      </section>
  )
  
}
export default Three