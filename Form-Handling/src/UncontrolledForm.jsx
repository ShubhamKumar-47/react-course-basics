import { useRef } from "react";
function UncontrolledForm() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
    };

    return ( 
        <form onSubmit={handleSubmit}>
            <h2>Uncontrolled Form</h2>
            <input type="text" placeholder="Name" ref={nameRef}/>
            <br/>
            <input type="email" placeholder="Email" ref={emailRef}/>
            <br/>
            <button type="submit">Submit</button>
        </form>
     );
}

export default UncontrolledForm;