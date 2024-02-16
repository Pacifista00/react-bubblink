function search() {
  return (
    <div className="search-bar py-4 sticky-top">
      <form class="d-flex bg-dark p-2" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn my-btn2" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default search;
