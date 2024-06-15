
import NavBar from "./components/navbar"
import SearchBar from "./components/searchbar"
import CountrySection from "./components/countries_section"
import StyleStateContext from "./context/style_context"

// import { useState, useEffect, } from 'react'




function App() {

  // let [countriesList, setCountriesList] = useState([])//country list 


  // let filterListData= JSON.parse(JSON.stringify(countriesList))

  // let [region, setRegion] = useState([])///region data

  // useEffect(() => {

  //   let fetchData = async () => {
  //     let regionData = new Set()
  //     let result = await fetch("https://restcountries.com/v3.1/all")
  //     let data = await result.json()
  //     data.forEach(country => {
  //       regionData.add(country.region)
  //     });

  //     // console.log('data fetch comleted')
  //     setRegion([...regionData])
  //     setCountriesList(data)
  //     // setFilterData(data)
  //   }
  //   fetchData()
  // }, [])

 
  // function searchBySection() {
  //   let selectedRegion = document.getElementById("region").value
  //   // console.log("search by region",selectedRegion)
  //   if (selectedRegion.toLowerCase() == 'all') {
  //     filterListData = JSON.parse(JSON.stringify(countriesList))
  //     return
  //   }
  //   let regionCountries = filterListData.filter((country) => country.region.toLowerCase() == selectedRegion.toLowerCase())
  //   // console.log(regionCountries, selectedRegion, selectedRegion, "at filter by selection list")
  //   filterListData = regionCountries
  //   // console.log(filterListData, selectedRegion, selectedRegion, "at filter by")


  // }
  // function searchByInputValue(event) {
    
  //   let selectedRegion = document.getElementById("region").value
  //   let regionCountries = selectedRegion.toLowerCase() == 'filterbyregion'? countriesList :  countriesList.filter((country) => country.region.toLowerCase() == selectedRegion.toLowerCase())
  //   let inputValue = event.target.value
  //   let inputCountries = regionCountries.filter((country) => country.name.common.toLowerCase().includes(inputValue.toLowerCase()))
  //   filterListData = JSON.parse(JSON.stringify(inputCountries))
 

  // }



  return (
    <>
      <StyleStateContext>
        <NavBar ></NavBar>
        <SearchBar inputSearch={()=>{}} sectionChange={()=>{}} regionData={''}></SearchBar>
        {/* {console.log(filterListData.length,"listData")} */}
        <CountrySection  ></CountrySection>
      </StyleStateContext>
    </>
  )
}



export default App

