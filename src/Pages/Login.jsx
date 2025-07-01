import { useState } from "react";
import { useNavigate } from "react-router-dom";


const DEFAULT_EMAIL = "james@red.com";
const DEFAULT_PASSWORD = "James@11";


function Login() {
  const [email, setEmail] = useState(DEFAULT_EMAIL);
  const [password, setPassword] = useState(DEFAULT_PASSWORD);
  const navigate = useNavigate();
  // const [error, setError] = useState("");

  // Simple validation (replace with real auth logic as needed)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === DEFAULT_EMAIL && password === DEFAULT_PASSWORD) {
      navigate("/dashboard");
    } else {
      // Optionally show error message
      // setError("Invalid email or password.");
      alert("Invalid email or password.");
    }
  };

    return (
      <div className="h-screen flex items-center justify-center bg-black">
        <div className="bg-white p-5 h-auto w-96 rounded-md">
         {/* xl:h-[650px] xl:w-[650px] xl:flex xl:flex-col xl:items-center xl:justify-center */}
          <h2 className="text-center font-bold text-2xl my-3">Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="p-3 border rounded-md w-full my-4 focus:outline-none "
            />
            <div className="flex flex-col capitalize">

              <input
                type="password"
                placeholder="Password"
                maxLength={8}
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="p-3 border rounded-md w-full my-4 focus:outline-none "
              />
            </div>
            <button type="submit" className="lg:cursor-pointer bg-blue-950 p-2 text-center text-white w-full my-5 focus:outline-none">Login</button>
          </form>
        </div>
      </div>
    );
  }

  export default Login;