import Greeting from "./Greeting"
import GreetingWithStyle from "./GreetingWithStyle"
import PostListWithData from "./PostListWithData"
import Dashboard from "./Dashboard"
import withAuth from "./hoc/withAuth"

const ProtectedDashboard = withAuth(Dashboard)

function App() {

  return (
    <>
      <Greeting name="Shubh" />
      <GreetingWithStyle name="Shubham" />
      <ProtectedDashboard />
      <PostListWithData />
    </>
  )
}

export default App