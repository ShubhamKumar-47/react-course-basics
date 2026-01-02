import {useState,useEffect} from 'react'

function First() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    useEffect(() => {
        document.title = `Count: ${count}`;
        console.log("Effect executed");
    }, [count])

  return (
    <div>
      <h1>First Component</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default First
