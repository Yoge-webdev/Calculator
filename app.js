import React,{useState}from 'react';
import ReactDOM from 'react-dom';
import Buttons from './buttons.js'
import {evaluate} from 'mathjs'

function App(){
  const[values, setValue]=useState('')
  function handleChange(event){
    event.preventDefault()
  }
  
  function handleSubmit(){
   if(!isNaN(values)){
     setValue('')
   }
   else{
    try{
  /*const inc=values.includes('%')?eval(values.replace('%','')/100):eval(values)*/
  const expression = values.replace(/(\d+(\.\d+)?)%/g, "($1/100)")
    const result=evaluate(expression)
    console.log(result)
    setValue(result)
    }catch(err){
       setValue('')
    }
  }}
  
  function handleClear(){
    setValue('')
  }
  function handleDelete(){
   const remove=values.slice(0,-1)
   setValue(remove)
   //console.log(remove)
  }
  return(
  <main>
    <Buttons 
    values={values}
    setValue={setValue}
    handleChange={handleChange}
    handleSubmit={handleSubmit}
    handleClear={handleClear}
    handleDelete={handleDelete}
    
    />
  </main>
  )
  }

ReactDOM.render(
  <App/>,
  document.getElementById('react-app')
);
