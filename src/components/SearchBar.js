import "../asset/styles/SearchBar.css";
import IconSearch from "../asset/icons/Group 1609.png";

const SearchBar = () => {
  return (
    <div class="wrapper">
      <img class="search-icon" src={IconSearch} alt="" />
      <input class="search" type="text" />
    </div>
  );
};

export default SearchBar;
