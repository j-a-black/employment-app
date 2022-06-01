const SearchBar = () => {
  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="fields">
          <div className="six wide field">
            <label>Keywords</label>
            <input
              type="text"
              placeholder="Job title, dept., agency, series, or occupation"
            />
          </div>
          <div className="five wide field">
            <label>Location</label>
            <input type="text" placeholder="City, state, zip, or country" />
          </div>
          <button className="ui button" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
