import { Link } from "react-router-dom";
import Logo from "../assets/logo/logo.png";

function Login() {
  return (
    <>
      <div className="bg-auth d-flex align-items-center min-vh-100">
        <div className="card card-auth mx-auto rounded-0 p-3">
          <div className="card-body">
            <div className="logo text-center mb-3">
              <img className="logo-img" src={Logo} alt="" />
            </div>
            <h3 className="text-center">Login</h3>
            <form>
              <div className="mt-3">
                <div className="my-input mb-3">
                  <i className="fa-solid fa-user mx-2"></i>
                  <input
                    type="email"
                    className="my-form-control bg-transparent border-0 mb-1"
                    id="email"
                    name="email"
                    placeholder="email"
                  />
                </div>
                <div className="my-input mb-3">
                  <i className="fa-solid fa-key mx-2"></i>
                  <input
                    type="password"
                    className="my-form-control bg-transparent border-0 mb-1"
                    id="password"
                    name="password"
                    placeholder="password"
                  />
                </div>
              </div>
              <button type="submit" className="btn my-btn text-light my-2">
                Login
              </button>
              <p className="text-center">
                Don't have an account?{" "}
                <Link to="/register" className="text-link">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
