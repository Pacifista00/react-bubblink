import { Link } from "react-router-dom";
import Logo from "../assets/logo/logo.png";

function Register() {
  return (
    <>
      <div className="bg-auth d-flex align-items-center min-vh-100">
        <div className="card card-auth mx-auto rounded-0 p-3">
          <div className="card-body">
            <div className="logo text-center mb-3">
              <img className="logo-img" src={Logo} alt="" />
            </div>
            <h3 className="text-center">Register</h3>
            <form>
              <div className="mt-3">
                <div className="my-input mb-3">
                  <input
                    type="text"
                    className="my-form-control bg-transparent border-0 mb-1"
                    id="username"
                    name="username"
                    placeholder="username"
                  />
                </div>
                <div className="my-input mb-3">
                  <input
                    type="email"
                    className="my-form-control bg-transparent border-0 mb-1"
                    id="email"
                    name="email"
                    placeholder="email"
                  />
                </div>
                <div className="my-input mb-3">
                  <input
                    type="password"
                    className="my-form-control bg-transparent border-0 mb-1"
                    id="password"
                    name="password"
                    placeholder="password"
                  />
                </div>
                <div className="my-input mb-3">
                  <input
                    type="password"
                    className="my-form-control bg-transparent border-0 mb-1"
                    id="password-confirm"
                    name="password-confirm"
                    placeholder="password confirm"
                  />
                </div>
              </div>
              <button type="submit" className="btn my-btn text-light my-2">
                Register
              </button>
              <p className="text-center">
                Have an account?{" "}
                <Link to="/" className="text-link">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
