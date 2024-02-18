function deleteModal() {
  return (
    <div
      className="modal"
      id="deleteModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content bg-dark rounded-0">
          <div className="my-modal modal-header rounded-0">
            <h5 className="modal-title">Delete</h5>
            <button
              type="button"
              className="btn-close bg-light"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>Want to delete this?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn my-btn-submit">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default deleteModal;
