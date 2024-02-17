import Search from "./search";
import Logo from "../assets/logo/logo.png";

function posts() {
  return (
    <main className="posts-card position-relative">
      <Search />
      <div className="card bg-dark text-light">
        <div className="card-header">
          <div className="d-flex align-items-center">
            <img src={Logo} alt="" className="profile-picture-post" />
            <div>
              <h3 className="ps-2 m-0 fs-6">
                Pacifista
                <i className="ms-1 p-0 text-verified fa-solid fa-circle-check"></i>
              </h3>
              <p className="ps-2 m-0 fs-6">22 Des 2023</p>
            </div>
            <div className="ms-auto">
              <div className="btn-group dropstart">
                <button
                  className="btn btn-link text-dark dropdown-toggle"
                  type="button"
                  id="optionsMenu"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  <i className="fas fa-ellipsis-v text-light"></i>
                </button>
                <ul
                  className="dropdown-menu rounded-0"
                  aria-labelledby="optionsMenu"
                >
                  <li>
                    <div
                      type="button"
                      className="dropdown-item my-dropdown"
                      data-bs-toggle="modal"
                      data-bs-target="#modalpost"
                    >
                      Edit
                    </div>
                  </li>
                  <li>
                    <div type="button" className="dropdown-item my-dropdown">
                      Delete
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className="post-image image-fluid" src={Logo} alt="post-image" />
        </div>
        <div className="card-body pt-2">
          <div className="container">
            <blockquote className="card-text fs-6 mb-0 pb-1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,
              accusamus.
            </blockquote>
            <div className="interact mb-2 pt-2">
              <button
                type="button"
                className="btn my-btn-comment rounded-pill mt-2 text-light"
                data-bs-toggle="modal"
                data-bs-target="#postDetailModal"
              >
                <i className="fa-regular fa-comment me-3">
                  <span className="ms-1">0</span>
                </i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default posts;
