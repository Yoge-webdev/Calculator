import React from 'react'
import InputSpace from './inputSpace.js'
import Top from'./top.js'
import One from'./One.js'
import Two from './Two.js'
import Three from'./three.js'
import Zero from './Zero.js'
function Buttons({values,setValue,handleChange,handleSubmit,handleClear,handleDelete}){
  return(
 <div className='numberbtn'>
   
      <div className='space'>
            <InputSpace
            values={values}
            handleChange={handleChange}
            setValue={setValue}
            />
      </div>
      
              <Top
              handleClear={handleClear}
              values={values}
              handleDelete={handleDelete}
              setValue={setValue}
              />
              <One
              values={values}
         setValue={setValue}
              />
              <Two
              values={values}
         setValue={setValue}
              />
             <Three
             values={values}
         setValue={setValue}
             />
             <Zero
             values={values}
         setValue={setValue}
         handleSubmit={handleSubmit}
             />
 </div>
  )
}
export default Buttons