/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import './App.css';

import React,{Component} from 'react';
import Book from './components/Book';

class App extends Component {
  state = {
    books  : [
      {id : "1",bookName : "CSE101" , writer: "A"},
      {id : "2",bookName : "CSE102" , writer: "B"},
      {id : "3",bookName : "CSE103" , writer: "C"},
      {id : "4",bookName : "CSE104" , writer: "D"},
    ],
    other: "Other Info"
  }


  deleteHandle = index => {
    const books = [...this.state.books]
    books.splice(index, 1);
    this.setState({
      books : books
    })

  }

  inputHandle = (event,index) => {
    const books = []
  }
  
   
  
  render() {

  const books = this.state.books.map((book,index)=> {
    return (
      <Book
        name={book.bookName}
        writer={book.writer}
        delete={() => this.deleteHandle(index)}
        input={(event) => this.inputHandle(event,index)}
        key = {book.id}
      />
    )
  });
    return (
      <div className="App">
        {books}
        
    </div>
  );
  }
}





export default App;
