import { useState } from "react";
function BasicValidationForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(!name || !email) {
            setErrors("Please fill in all fields");
        } else {
            setErrors("");
            console.log("Form submitted successfully : ",{name, email});
            alert("Form submitted successfully");
        }
    };

    return ( 
        <form onSubmit={handleSubmit}>
            <h2>Basic Validation Form</h2>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <br/>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br/>
            {errors && <p style={{color: "red"}}>{errors}</p>}
            <button type="submit">Submit</button>
        </form>
     );
}

export default BasicValidationForm;