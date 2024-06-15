
import NavBar from "./components/navbar"
import SearchBar from "./components/searchbar"
import CountrySection from "./components/countries_section"
import MainStateContext from "./context/mainContext"

function App() {
  return (
    <>
      <MainStateContext>
        <NavBar ></NavBar>
        <SearchBar inputSearch={()=>{}} sectionChange={()=>{}} regionData={''}></SearchBar>
        {/* {console.log(filterListData.length,"listData")} */}
        <CountrySection  ></CountrySection>
      </MainStateContext>
    </>
  )
}



export default App

