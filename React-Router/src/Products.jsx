import {Link, Outlet} from "react-router-dom"
export default function Products(){
    return (
        <>
            <h2>Products Page</h2>
            <nav>
                <Link to="/products/phone">Phone</Link> |{" "}
                <Link to="/products/laptop">Laptop</Link>
            </nav>
            <Outlet />
        </>
    )
}