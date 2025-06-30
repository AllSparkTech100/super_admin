import { useState } from "react"
import SuperAdminDashboard from "./Pages/SuperAdminDashboard"
import Login from "./Pages/Login"


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {isAuthenticated ? (
        <SuperAdminDashboard />
      ) : (
        <Login onLogin={() => setIsAuthenticated(true)} />
      )}
    </>
  );
}

export default App
