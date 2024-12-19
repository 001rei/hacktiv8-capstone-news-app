import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
      <>
        <Navbar />
        <div className="container-lg px-5 px-sm-3 mb-5">
          <main>
            <Outlet />
          </main>
        </div>
        <Footer />
      </>
    );
}