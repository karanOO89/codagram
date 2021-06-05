import SingleSearch from './search/SingleSearch'
import Background from './search/background'
import  "./search/all_search.scss"

const SearchResult = () => {

  return (
    <div>      
      <Background />
      <SingleSearch />
    </div>
  )
}

export default SearchResult;