import React from 'react'
function InputSpace({values,handleChange,setValue}){
   return(
     <div>
    <form onSubmit={handleChange}>
       <input
       className='inputbox'
        type='text'
        value={values}
        onChange={(e)=>setValue(e.target.value)}
       readOnly
       />
     </form>
     </div>
   )
   
}
export default InputSpace