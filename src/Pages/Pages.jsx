import { Route, Routes } from "react-router-dom"

function Pages() {
  return (
    <div>Pages
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/superadmindashboard" element={<SuperAdminDashboard />} />
      </Routes>
    </div>
  )
}

export default Pages