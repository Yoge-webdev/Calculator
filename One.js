import React from 'react'
function One({values,setValue}){
  return(
      <section className='one'>
        <button 
        onClick={()=>setValue(pre=>pre+'1')}
        >1</button>
        <button
          onClick={()=>setValue(pre=>pre+'2')}
        >2</button>
        <button
         onClick={()=>setValue(pre=>pre+'3')}
        >3</button>
        <button
         onClick={()=>setValue(pre=>pre+'*')}
        >×</button>
      </section>  
    
  )
  
}
export default One