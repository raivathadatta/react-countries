
import NavBar from "./components/navbar"
import SearchBar from "./components/searchbar"
import CountrySection from "./components/countries_section"
import StyleStateContext from "./context/style_context"

import { useState, useEffect, } from 'react'

// let  UserContext = createContext(style);

function App() {
  let [isDarkMode, setIsDarkMode] = useState(false)
  let [region, setRegion] = useState([])
  let [data, setData] = useState([])
  let [regionData, setRegionData] = useState([])
  let [countriesList, setCountriesList] = useState([])



  useEffect(() => {
    let fetchData = async () => {
      let regionData = new Set()
      let result = await fetch("https://restcountries.com/v3.1/all")
      let data = await result.json()
      data.forEach(country => {
        regionData.add(country.region)
      });
      setRegion([...regionData])
      setRegionData(data)
      setCountriesList(data)
      setData(data)
    }
    fetchData()

  }, [])


  function searchBySection(event) {
    if (event.target.value.toLowerCase() == 'all') {
      setData(countriesList)
      return
    }

    console.log(countriesList)
    let region = event.target.value
    let regionCountries = countriesList.filter((country) => country.region.toLowerCase() == region.toLowerCase())
    console.log(regionCountries)
    data = regionCountries
    setRegionData(regionCountries)
    setData(data)
  }
  function searchByInputValue(event) {
    let inputValue = event.target.value
    console.log(inputValue)
    let inputCountries = regionData.filter((country) => country.name.common.toLowerCase().includes(inputValue.toLowerCase()))
    data = inputCountries
    setData(data)
  }



  return (
    <>

      <StyleStateContext>
        <NavBar ></NavBar>
        <SearchBar inputSearch={searchByInputValue} sectionChange={searchBySection} regionData={region}></SearchBar>
        <CountrySection data={data}  ></CountrySection>
      </StyleStateContext>
    </>
  )
}



export default App

