import {useState} from 'react'

function ToggleText() {
  const [isTextVisible, setIsTextVisible] = useState(false)

  return (
    <div>
      <button onClick={() => setIsTextVisible(!isTextVisible)}>
        {isTextVisible ? 'Hide' : 'Show'} Text
      </button>
      {isTextVisible && <p>This is the text that can be toggled.</p>}
    </div>
  )
}

export default ToggleText
