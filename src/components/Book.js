import React from "react"


function Book(props) {
  return (
    <div className='App'>
          <h1 onClick={props.delete}>Book Name: {props.name}</h1>
         <h4>Writer : {props.writer}</h4>
        <input type="text" onChange={props.input} value={props.name} />
    </div>
  )
}


 export default Book