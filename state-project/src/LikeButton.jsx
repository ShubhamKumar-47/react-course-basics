import { useState } from "react"

function LikeButton() {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div>
      <button onClick={() => setIsLiked(!isLiked)}>
        {isLiked ? 'Unlike' : 'Like'}
      </button>
    </div>
  )
}

export default LikeButton