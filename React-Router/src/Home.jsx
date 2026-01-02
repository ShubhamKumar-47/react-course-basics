import { useNavigate } from "react-router-dom"

export default function Home(){

    const navigate = useNavigate();
    const goTOAbout = () => {
        navigate("/about");
    }
    return(
        <div>
            <h2>Welcome to Home Page</h2>
            <button onClick={goTOAbout}>Go to About</button>
        </div>
    )
}