// import { useState } from "react"
// import SuperAdminDashboard from "./Pages/SuperAdminDashboard"
// import Login from "./Pages/Login"
// import Dashboard from "./Pages/Dashboard";
import SideMenu from "./Components/SideMenu";
import Pages from "./Pages/Pages";



function App() {

  return (
    <>
      <div className="flex gap">
        <SideMenu />
        <main className="lg:p-0 bg-[#f5f8fe] p-3 flex-1 flex-col">
          <Pages />
        </main>

      </div>

    </>
  );
}

export default App
