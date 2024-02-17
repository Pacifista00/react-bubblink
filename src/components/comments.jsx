import Logo from "../assets/logo/logo.png";

function comments() {
  return (
    <div className="comments border-top">
      <h2 className="ms-3 mt-3">Comments</h2>
      <ul>
        <li className="list-group-item bg-dark pb-2">
          <div className="d-flex align-items-center m-0">
            <img src={Logo} alt="" className="profile-picture-post" />
            <div className="">
              <h3 className="ms-2 mb-0 mt-3 fs-6 card-title">
                Pacifista
                <i className="ms-1 p-0 text-verified fa-solid fa-circle-check"></i>
              </h3>
              <p className="ms-2 fs-6 text-secondary">3 hour ago</p>
            </div>
            <div className="ms-auto">
              <div className="dropdown">
                <button
                  className="btn btn-link text-dark dropdown-toggle"
                  type="button"
                  id="optionsMenu"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-ellipsis-v"></i>
                </button>
                <ul className="dropdown-menu" aria-labelledby="optionsMenu">
                  <li>
                    <div
                      type="button"
                      className="dropdown-item my-dropdown"
                      data-bs-toggle="modal"
                      data-bs-target="#postDetailModal"
                    >
                      Edit
                    </div>
                  </li>
                  <li>
                    <div
                      type="button"
                      className="dropdown-item my-dropdown"
                      href="#"
                    >
                      Delete
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <blockquote>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
            odit.
          </blockquote>
        </li>
      </ul>
    </div>
  );
}

export default comments;
