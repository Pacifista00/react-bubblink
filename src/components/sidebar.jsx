import { Link } from "react-router-dom";
import Logo from "../assets/logo/logo.png";

function sidebar() {
  return (
    <aside className="sidebar sticky-top p-4">
      <div className="d-flex align-items-center mb-3">
        <img src={Logo} alt="" className="sidebar-logo img-fluid" />
        <h5 className="m-0 ms-2">BUBBLINK</h5>
      </div>
      <ul className="list-unstyled">
        <li className="list-item">
          <Link
            className="text-decoration-none p-1 fs-6 d-block rounded my-1"
            to="/home"
          >
            HOME
          </Link>
        </li>
        <li className="list-item">
          <Link
            v-if="user.id"
            className="text-decoration-none p-1 fs-6 d-block rounded my-1"
          >
            PROFILE
          </Link>
        </li>
        <li className="list-item">
          <Link
            className="text-decoration-none p-1 fs-6 d-block rounded my-1"
            to="/create"
          >
            CREATE POST
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default sidebar;
