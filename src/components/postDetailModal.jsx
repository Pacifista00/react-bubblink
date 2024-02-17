import Logo from "../assets/logo/logo.png";
import Comments from "./comments";

function postDetailModal() {
  return (
    <div
      className="modal modal-lg fade"
      id="postDetailModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content bg-dark rounded-0">
          <div className="my-modal modal-header rounded-0">
            <h4 className="modal-title" id="exampleModalLabel">
              Detail Post
            </h4>
            <button
              type="button"
              className="btn-close bg-light"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body mt-1 pt-1">
            <div className="d-flex align-items-center m-0">
              <img src={Logo} alt="" className="profile-picture-post" />
              <div className="">
                <h3 className="ps-2 m-0 fs-6">
                  Pacifista
                  <i className="ms-1 p-0 text-verified fa-solid fa-circle-check"></i>
                </h3>
                <p className="ps-2 m-0 fs-6 text-secondary">12 des 2003</p>
              </div>
            </div>
            <div className="container">
              <div className="mb-3">
                <img
                  className="detail-post-image"
                  src={Logo}
                  alt="post-image"
                />
              </div>
              <p className="card-text my-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam,
                error?
              </p>
            </div>
          </div>
          <Comments />
          <form className="search-bar d-flex p-3 sticky-top" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Add comment!"
            />
            <button type="" className="btn my-btn-submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default postDetailModal;
