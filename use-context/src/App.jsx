// import NavBar from "./auth-example/Navbar";
// import {AuthProvider} from "./auth-example/AuthContext";

// function App() {

//   return (
//     <>
//       <AuthProvider>
//         <NavBar />
//       </AuthProvider>
//     </>
//   )
// }

// export default App

// Theme Switcher Example Code
import { useState } from "react";
import ThemeContext from "./theme-example/ThemeContext";
import Toolbar from "./theme-example/Toolbar";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        style={{
          height: "100vh",
          backgroundColor: theme === "light" ? "#f2f2f2" : "#121212",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Toolbar />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;



// Pass Object via Context Provider Example
// const UserContext = createContext();

// function App() {
//   const user = { name: "Yahubaba", role: "Admin" };

//   return (
//     <>
//       <UserContext.Provider value={user}>
//         <Parent />
//       </UserContext.Provider>
//     </>
//   )
// }

// function Parent() {
//   return <Child />;   // Passing down
// }

// function Child() {
//   return (
//     <div>
//       <GrandChild />
//     </div>
//   );  // Passing again
// }

// function GrandChild() {
//   const { name, role } = useContext(UserContext)
//   return <h3>Welcome {name} - your role is {role}</h3>;
// }

// export default App


// import React, { createContext, useContext } from "react";

// /* 1️⃣ Create Context */
// const UserContext = createContext();

// /* 2️⃣ App Component (Provider) */
// function App() {
//   const user = "Yahubaba";

//   return (
//     <UserContext.Provider value={user}>
//       <Parent />
//     </UserContext.Provider>
//   );
// }

// /* 3️⃣ Parent Component */
// function Parent() {
//   return <Child />;
// }

// /* 4️⃣ Child Component */
// function Child() {
//   return <GrandChild />;
// }

// /* 5️⃣ GrandChild Component (Consumer) */
// function GrandChild() {
//   const user = useContext(UserContext);

//   return <h3>Welcome {user}</h3>;
// }

// export default App;
