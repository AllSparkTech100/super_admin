import SideMenu from "./Components/SideMenu";
import Pages from "./Pages/Pages";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isLoginOrSignup = location.pathname === "/" || location.pathname === "/signup";


  return (
    <>
      <div className="flex gap">
         {!isLoginOrSignup && <SideMenu />}
        <main className="lg:p-0 bg-[#f5f8fe] flex-1 flex-col w-full">
          {/* Only render Header if not on login or signup */}
          {!isLoginOrSignup && <Header />}
          <Pages />
        </main>
      </div>
    </>
  );
}

export default App
