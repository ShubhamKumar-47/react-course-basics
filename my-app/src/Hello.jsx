// function Hello() {
//     // const name = "Shubham";
//     const headingStyle = {
//         color:"red",
//         fontSize:"20px",
//         textAlign:"center"
//     }

//     function getName(name){
//         return name;
//     }

//     function handleClick(){
//         alert("Button was clicked!")
//     }

//     const name = "Shubham";

//     const handleInput = (event) =>{
//         console.clear();
//         console.log("value : ",event.target.value);
//     }

//     const handleMouseOver = () => console.log("Mouse is over!");
//     const handleDoubleClick = () => console.log("Double clicked!");
//     return ( 
//         <>
//         {/* <h1 style={headingStyle}>Hello! {name}</h1> */}
//         <h1>Hello {getName(name)}</h1>
//         <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>Loream Shubh</p>
//         <button onClick={handleClick}>Click me</button>
//         <button onClick={() => alert("Hello from inline!")}>Say Hello!</button>
//         <input type="text" onChange={handleInput} placeholder="type Something"/>
//         </>
//      );
// }

// export default Hello;

// import React from 'react'

// const Hello = () => {
//     const fruits = ["apple", "banana", "orange"]
//   return (
//     <div>
//       <h2>Fruit lists</h2>
//       <ul>
//         {fruits.map((fruit, index) => (
//           <li key={index}>{fruit}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Hello



// import React from 'react'

// const Hello = () => {
//   // const isLoggedIn = true;
//   // if(isLoggedIn){
//   //   return <h1>Welcome back!</h1>
//   // }else{
//   //   return <h1>Please log in!</h1>
//   // }

//   const hasMessage = true;


//   return (
//     <div>
//       {hasMessage && <p>You have a message!</p>}
//     </div>
//   )
// }

// export default Hello


import React from 'react'

const Hello = (props) => {
  const {name, age, city, hobby} = props;
  return (
    <div>
      <h1>Hello {name}!</h1>
      <h2>Age: {age}</h2>
      <h3>City: {city}</h3>
      <ul>
        {hobby.map((hobby,index) => (
          <li key={index}>{hobby}</li>
          ))}
      </ul>
    </div>
  )
}

export default Hello
