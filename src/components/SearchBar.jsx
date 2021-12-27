import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-box">
      <form
        action="https://www.google.com/search"
        className="searchform"
        method="get"
        name="searchform"
      >
        <input
          type="text"
          name="q"
          autoComplete="off"
          placeholder="Search"
          autoFocus
        />
      </form>
    </div>
  );
}

export default SearchBar;
