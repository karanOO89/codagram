import SearchContainer from "../components/searchNew/searchContainer";
import TopNav from "../components/topNav";
import "./searchPage.scss";
const SearchPage = (props) => {
  return (
    <div className="searchPage">
      {/* <div>
        <TopNav />
      </div> */}
      <div>
        <SearchContainer />
        search
      </div>
    </div>
  );
};
export default SearchPage;
