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
        <li className="list-item active px-2">
          <Link
            className="text-decoration-none p-1 fs-6 d-block rounded my-1"
            to="/home"
          >
            <i class="fa-solid fa-house me-2"></i>
            HOME
          </Link>
        </li>
        <li className="list-item px-2">
          <Link
            v-if="user.id"
            className="text-decoration-none p-1 fs-6 d-block rounded my-1"
          >
            <i class="fa-solid fa-user me-2"></i>
            PROFILE
          </Link>
        </li>
        <li className="list-item px-2">
          <Link
            className="text-decoration-none p-1 fs-6 d-block rounded my-1"
            to="/create"
          >
            <i class="fa-solid fa-plus me-2"></i>
            CREATE POST
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default sidebar;
