import {useState} from 'react'

const Student = () => {
  const [name, setName] = useState({
    name : "john",
    grade : "A",
    city : "New York"
  })

  const changeCity = () =>{
    setName({...name, city: "Los Angeles"})
  }

  return (
    <div>
      <h2>Name : {name.name}</h2>
      <p>Grade : {name.grade}</p>
      <p>City : {name.city}</p>
      <button onClick={changeCity}>Change City</button>
    </div>
  )
}

export default Student
