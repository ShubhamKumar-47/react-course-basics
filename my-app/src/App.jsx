import React from 'react'
import Hello from './Hello'
const App = () => {
  const hobby = ["reading", "swimming", "coding"]
  function Message(){
    alert("Button was clicked!");
  }

  function MessageBye(){
    alert("Button was clicked!");
  }
  return (
    <div>
      {/* <h1>Hello from React!</h1> */}
      <Hello name="Shubham" age={25} city="Delhi" hobby={hobby}/>
      <Hello name="Shubh" age={24} city="Delhi" hobby={hobby}/>
      <button onClick={MessageBye}>Click me</button>
      <button onClick={Message}>Click me</button>
    </div>
  )
}
  
export default App
