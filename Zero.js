import React from 'react'
function Zero({values,setValue,handleSubmit}){
  return(
    <section className='zero'>
        <button
        onClick={()=>alert('disabled')}
        >🚫</button>
        <button
        onClick={()=>setValue(pre=>pre+'0')}
        >0</button>
        <button
         onClick={()=>setValue(pre=>pre+'.')}
        >.</button>
        <button type='submit'
        onClick={handleSubmit}
        >=</button>
     </section>
  )
  
}
export default Zero