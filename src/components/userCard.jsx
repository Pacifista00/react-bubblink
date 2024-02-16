import Logo from "../assets/logo/logo.png";

function userCard() {
  return (
    <aside className="user-card sticky-top p-4">
      <div className="card-sidebar card sticky-top text-light bg-dark rounded-0">
        <div className="card-body mx-auto">
          <img
            src={Logo}
            className="profile-picture-aside rounded-circle m-3"
            alt="profile"
          />
          <h3 className="text-center py-0 my-0">Pacifista</h3>
          <p className="text-center text-secondary">Admin</p>
        </div>
        <form>
          <button type="submit" className="text-light my-btn py-2 fs-5">
            Logout
          </button>
        </form>
      </div>
    </aside>
  );
}

export default userCard;
