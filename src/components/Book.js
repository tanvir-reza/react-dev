import React from "react"


function Book(props) {
  return (
    <div className='App'>
          <h1 onMouseOver={props.change}>Book Name: {props.name}</h1>
          <h4>Writer : {props.writer}</h4>
    </div>
  )
}


 export default Book