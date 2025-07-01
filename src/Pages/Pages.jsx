import { Route, Routes } from "react-router-dom"
// import SuperAdminDashboard from "./SuperAdminDashboard"
import Login from "./Login"
import Dashboard from "./Dashboard"
import Analytics from "./Analytics"
import Messages from "./Messages"
import Reports from "./Reports"
import Settings from "./Settings"
import Users from "./Users"

function Pages() {
  return (

    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
        {/* <Route path="/superadmindashboard" element={<SuperAdminDashboard />} /> */}
      </Routes>
    </>

  )
}

export default Pages