import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Products from "./Products"
import Phone from "./Phone"
import Laptop from "./Laptop"

const App = () => {

  function User() {
    console.log(useParams())
    const { id } = useParams();
    return <h2>User ID: {id}</h2>;
  }

  function NotFound(){
    return <h2>404 - Page Not Found</h2>;
  }

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} >
          <Route path="phone" element={<Phone />} />
          <Route path="laptop" element={<Laptop />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
