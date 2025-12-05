import React, { useState } from "react";
import './../styles/App.css';
import Form from "./form";

const App = () => {
const [isLoggedIn, setIsLoggedIn] = useState(false);

 
  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  return (
    <div>
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <div>
          <h1>Parent Component</h1>
          
          <Form onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
}

export default App;
