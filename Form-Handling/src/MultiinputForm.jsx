import { useState } from "react";
function MultiinputForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with data:", formData);
    };

    return ( 
        <form onSubmit={handleSubmit}>
            <h2>Multiple Input Form</h2>
            <input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange}/>
            <br/>
            <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange}/>
            <br/>
            <input name="phone" type="tel" placeholder="Phone" value={formData.phone} onChange={handleChange}/>
            <br/>
            <button type="submit">Submit</button>
        </form>
     );
}

export default MultiinputForm;