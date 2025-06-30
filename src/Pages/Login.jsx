import { useState } from "react";
// import {useNavigate} from "react-router-dom"


const DEFAULT_EMAIL = "james@red.com";
const DEFAULT_PASSWORD = "James@11";


function Login({ onLogin }) {
  const [email, setEmail] = useState(DEFAULT_EMAIL);
  const [password, setPassword] = useState(DEFAULT_PASSWORD);
  // const navigate = useNavigate(); // Initialize navigate
  // const [error, setError] = useState("");

  // const userValidation = async (email, password) => {
  //   // Example: Replace with your actual authentication logic
  //   // Simulate a database check
  //   return email === DEFAULT_EMAIL && password === DEFAULT_PASSWORD;
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const isAuthenticated = await userValidation(email, password);
  //   if (isAuthenticated) {
  //     // setError("");
  //     // navigate("/superadmin-dashboard"); // Redirect to dashboard
  //   } else {
  //     // setError("Invalid email or password.");
  //   }
  //   };
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add real authentication logic here
      if (email && password) {
        onLogin();
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