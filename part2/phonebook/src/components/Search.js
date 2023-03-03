const Search = ({ onChange, value}) => {
  return (
    <div>
      filter shown with <input type="search" value={value} onChange={onChange} />
    </div>
  );
};

export default Search;
