import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Navbar() {
    return (
      <>
        <header>
          <div className="row justify-content-center hero shadow-sm">
            <div className="col-lg-6 py-4">
              <h1 className="text-center title">The Bulletin.</h1>
            </div>
          </div>
          <div>
            <nav className="navbar navbar-expand-lg pt-5 pb-4">
              <div className="container">
                <div className="row w-100 justify-content-center gap-5">
                  <div className="col-auto">
                    <Link className="nav-link " to="/">
                      INDONESIA
                    </Link>
                  </div>
                  <div className="col-auto">
                    <Link className="nav-link" to="/programming">
                      PROGRAMMING
                    </Link>
                  </div>
                  <div className="col-auto">
                    <Link className="nav-link " to="/covid">
                      COVID-19
                    </Link>
                  </div>
                  <div className="col-auto">
                    <Link className="nav-link " to="/saved">
                      SAVED
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
            <SearchBar />
            <hr
              style={{
                width: "75%",
                margin: "20px auto",
                borderTop: "2px solid black",
              }}
            />
          </div>
        </header>
      </>
    );
}