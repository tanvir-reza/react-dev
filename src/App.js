import './App.css';

import React,{Component} from 'react';
import Book from './components/Book';

class App extends Component {
  state = {
    books  : [
      {bookName : "CSE101" , writer: "A"},
      {bookName : "CSE102" , writer: "B"},
      {bookName : "CSE103" , writer: "C"},
      {bookName : "CSE104" , writer: "D"},
    ],
    other: "Other Info"
  }

  ClickHandle = changeName => {
    this.setState({
      books  : [
      {bookName : changeName , writer: "A"},
      {bookName : "CSE102" , writer: "B"},
      {bookName : "CSE103" , writer: "C"},
      {bookName : "CSE104" , writer: "D"},
    ]
    })
  }

  ChangeHandle = event => {
    this.setState({
      books  : [
      {bookName : event.target.value , writer: "A"},
      {bookName : "CSE102" , writer: "B"},
      {bookName : "CSE103" , writer: "C"},
      {bookName : "CSE104" , writer: "D"},
    ]
    })
  }
  render() {
    return (
      <div className="App">
        {/* <button onClick={this.ClickHandle}>Click To Change</button> */}
        <input type="test" onChange={this.ChangeHandle} />
      <Book change={this.ClickHandle.bind(this,"OKY")} name={this.state.books[0].bookName} writer = {this.state.books[0].writer} />
      <Book name={this.state.books[1].bookName} writer = {this.state.books[1].writer} />
      <Book name={this.state.books[2].bookName} writer = {this.state.books[2].writer} />
      <Book name={this.state.books[3].bookName} writer = {this.state.books[3].writer} />
        
    </div>
  );
  }
}





export default App;
