import { useState } from "react"

//State Lifting

function Parent(){
  const [text, setText] = useState("")

  return (
    <div>
      <InputBox onChange={setText} />
      <Display value={text} />
    </div>
  )
}

function InputBox({ onChange }){
  return <input type="text" onChange={(e) => onChange(e.target.value)} />
}

function Display({ value }){
  return <h3>Typed : {value}</h3>
}

//Props Drilling

// function Parent(){
//   const userName = "Shubham"
//   return <Child name={userName} />
// }

// function Child({ name }){
//   return <GrandChild name={name} />
// }

// function GrandChild({ name }){
//   return <h3>Child's Name : {name}</h3>
// }

function App() {

  return (
    <>
      <Parent />
    </>
  )
}

export default App