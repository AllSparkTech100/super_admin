// import { useState } from "react"
// import SuperAdminDashboard from "./Pages/SuperAdminDashboard"
// import Login from "./Pages/Login"
// import Dashboard from "./Pages/Dashboard";
import SideMenu from "./Components/SideMenu";
import Pages from "./Pages/Pages";




import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  return (
    <>
      <div className="flex gap">
        {!isLoginPage && <SideMenu />}
        <main className="lg:p-0 bg-[#f5f8fe]  flex-1 flex-col w-full">
          <Pages />
        </main>
      </div>
    </>
  );
}

export default App
