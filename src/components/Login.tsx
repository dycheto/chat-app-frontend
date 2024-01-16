import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as authService from "../service/authService";
import { UserType } from "../types";
import { AppContext } from "../context/AppContext";

function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  

  const navigate = useNavigate();
  const appContext = useContext(AppContext);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    try{

      const response = await authService.login(username, password);

      if(response.jwt && appContext){
        appContext.setState((prevState) => ({
          ...prevState,
          currentUser: { id: response.userId, username: response.username, jwt: response.jwt }
        }));

        localStorage.setItem('token', response.jwt);
        localStorage.setItem('username', response.username);
        localStorage.setItem('userId', response.userId);

        navigate("/home")
      }

    }catch(error){

    }

    
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <span>
        If you dont have an account <Link to="/register">Register</Link>
      </span>
    </div>
  );
}

export default Login;
