function App2(props) {
  return (
    <div className='App'>
          <h1>Name: {props.name}</h1>
          <h4>Age : {props.age}</h4>
          <p>Info : { props.children}</p>
    </div>
  )
}


export default App2