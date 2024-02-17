function addPostModal() {
  return (
    <div
      className="modal modal-lg fade"
      id="addPostModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <form>
          <div className="modal-content bg-dark rounded-0">
            <div className="my-modal modal-header rounded-0">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add Post
              </h1>
              <button
                type="button"
                className="btn-close text-light bg-light"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-2">
                <label htmlFor="image" className="col-form-label">
                  Add image
                </label>
                <br />
                <input className="form-control" type="file" id="image" />
              </div>
              <div className="mb-2">
                <label htmlFor="username" className="col-form-label">
                  Content:
                </label>
                <textarea className="form-control" id="username"></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn my-btn-submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default addPostModal;
