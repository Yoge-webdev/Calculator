import React from 'react'
function Top({handleClear,values,handleDelete, setValue
}){
  return(
      <section className='top'>
         <button
         onClick={handleClear}
         >C</button>
         <button
         onClick={()=>setValue(pre=>pre+'%')}
         >%</button>
         <button
         onClick={handleDelete}
         >X</button>
         <button
         onClick={()=>setValue(pre=>pre+'/')}
         >÷</button>
      </section>
  )
}
export default Top 