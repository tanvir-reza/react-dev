/* eslint-disable no-useless-constructor */
import React,{Component} from "react"


// function Person(props) {
//   return (
//     <div className='App'>
//           <h1>Name: {props.name}</h1>
//           <h4>Age : {props.age}</h4>
//           <p>Info : { props.children}</p>
//     </div>
//   )
// }


class Person extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='App'>
            <h1>Name: {this.props.name}</h1>
            <h4>Age : {this.props.age}</h4>
            <p>Info : { this.props.children}</p>
           </div>
        )
    }
}


export default Person