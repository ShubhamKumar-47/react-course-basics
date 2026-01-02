import {useState} from 'react'

const UserProfile = () => {
  const [name, setName] = useState('Guest')
  const [age, setAge] = useState(18)

  return (
    <div>
        <h2>User Profile</h2>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <button onClick={() => setName('John Doe')}>Set Name</button>
        <button onClick={() => setAge(age + 1)}>Set Age</button>
    </div>
  )
}

export default UserProfile
