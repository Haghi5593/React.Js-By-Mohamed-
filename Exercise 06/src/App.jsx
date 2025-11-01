import { useState, useEffect } from "react";

const App = () => {

  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("Hello");

  useEffect(() => {
    if(!name) {
      document.title = "Welcome Guest";
    } else {
      document.title = `${greeting}, ${name}`;
    }
  }, [name, greeting]);

  return (
    <div>
      <h2>Enter Your Name:</h2>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <h2>Select Greeting:</h2>
      <select 
        value={greeting} 
        onChange={(e) => setGreeting(e.target.value)}
      >
        <option value="Hello">Hello</option>
        <option value="Hi">Hi</option>
        <option value="Greetings">Greetings</option>
        <option value="Salutations">Salutations</option>
      </select>
    </div>    
  );
}

export default App;