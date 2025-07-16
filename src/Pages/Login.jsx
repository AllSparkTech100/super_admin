/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";


// const DEFAULT_EMAIL = "james@red.com";
// const DEFAULT_PASSWORD = "James@11";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const [error, setError] = useState("");

  // Simple validation (replace with real auth logic as needed)
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (email === DEFAULT_EMAIL && password === DEFAULT_PASSWORD) {
  //     navigate("/dashboard");
  //   } else {
  //     // Optionally show error message
  //     // setError("Invalid email or password.");
  //     alert("Invalid email or password.");
  //   }
  // };
  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("https://api.ilearnova.com/api/auth/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok && data.success) {
      // Optionally store token/user info
      // localStorage.setItem("token", data.token);
      // localStorage.setItem("adminName", data.user.name);
      navigate("/dashboard");
    } else {
      alert(data.message || "Invalid email or password.");
    }
  } catch (error) {
    alert("Network error. Please try again.");
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
                 {!isLoginOrSignup && <SideMenu />}
        <main className="lg:p-0 bg-[#f5f8fe] flex-1 flex-col w-full">
          {/* Only render Header if not on login or signup */}
          {!isLoginOrSignup && <Header />}
          <Pages />
        </main>
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