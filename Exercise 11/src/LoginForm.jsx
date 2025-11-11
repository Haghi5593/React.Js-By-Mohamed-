import { useState } from "react";

const LoginForm = () => {

    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = (event) => {
    event.preventDefault();
    // Simulate authentication
    if (username && password) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setUsername('');
    setPassword('');
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div>
        <h1>Long time no see, {username}!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleLogin}>
    <div>
      <label htmlFor="username">Username:</label>
      <input
             type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required /> <br /> <br />
      <label htmlFor="password">Password:</label>
      <input
               type="password"
               value={password}
                onChange={(e) => setPassword(e.target.value)}
               required />
      <br /> <br />

    </div>

            <button type="submit">Login</button>

  </form>
  );
};

export default LoginForm;
