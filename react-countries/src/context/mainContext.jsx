import { useState, useEffect } from "react";
import MainContext from "./context-main";

let lightModeStyle = {
    bodyStyle: 'bg-white text-black',
    headerBackgroundStyle: 'flex flex-row justify-between p-[1%] bg-[#FFFFFF]',
    headerStyle: "flex flex-row justify-between shadow-md p-[1%] bg-[#FFFFFF]",
    filterStyle: "bg-gray-100 text-blackshadow-md outline-none p-[1%] ",
    countryCardStyle: 'w-[22%] m-4 shadow-md rounded-xl bg-white ',
    CountrySectionStyle: "flex flex-wrap justify-between bg-white text-black"
}

let darkModeStyle = {
    bodyStyle: 'bg-black',
    headerBackgroundStyle: 'flex flex-row justify-between p-[1%] bg-black',
    headerStyle: "flex flex-row justify-between shadow-md p-[1%] bg-black text-white",
    countryCardStyle: 'w-[22%] m-4 box-shadow-white shadow-md rounded-xl bg-gray-400 ',
    filterStyle: "bg-gray-300 text-black boder-white p-[1%] ",
    CountrySectionStyle: "flex flex-wrap justify-between bg-black text-black"
}


let MainStateContext = (props) => {



    let [filterListData, setFilterData] = useState([])//filter list//list paasing to htm to render     
    let [countryiesData, setCountriesList] = useState({countryiesList:[] , region:{}})//country list 

    let regionList = Object.keys(countryiesData.region)
    let [subRegion, setSubRegion] = useState([])//subregion list

  
    useEffect(() => {

        let fetchData = async () => {
            let regionData = {}
            let result = await fetch("https://restcountries.com/v3.1/all")
            let data = await result.json()
            data.forEach(country => {
                if (!regionData[country.region]) {
                    regionData[country.region] = new Set()
                }
                regionData[country.region].add(country.subregion)

            });

            // setRegion(regionData)
            setFilterData(data)
            setCountriesList({countryiesList:data,region:regionData})
        }
        fetchData()
    }, [])

   
    let [style, setDark] = useState({ isDarkMode: false, backGroundStyle: lightModeStyle })

    let modeText = style.isDarkMode ? "light Mode" : "Dark Mode"
    let updateStyle = () => {

        if (style.isDarkMode) {
            let darkMode = !style.isDarkMode
            setDark({ isDarkMode: darkMode, backGroundStyle: { ...lightModeStyle } })
        } else {
            let darkMode = !style.isDarkMode
            setDark({ isDarkMode: darkMode, backGroundStyle: { ...darkModeStyle } })

        }

    }




    let searchBySection = () => {

        let selectedRegion = document.getElementById("region").value
        let regionCountries = JSON.parse(JSON.stringify(countryiesData.countryiesList))
        regionCountries = regionCountries.filter((country) => {
            return country.region.toLowerCase() == selectedRegion.toLowerCase()
        })
        setSubRegion([...countryiesData.region[selectedRegion]])///adding sub region by data 
        setFilterData(regionCountries)/// adding filter data 
        // setSubRegionData(regionCountries)

    }

    let searchByInputValue = (event) => {
        let copyOfCountryList = JSON.parse(JSON.stringify(countryiesData.countryiesList))
        let selectedRegion = document.getElementById("region").value
        let regionCountries = selectedRegion.toLowerCase() == 'filterbyregion' ? copyOfCountryList : selectedRegion.toLowerCase() == 'all' ? copyOfCountryList : copyOfCountryList.filter((country) => country.region.toLowerCase() == selectedRegion.toLowerCase())
        let inputValue = event.target.value
        let inputCountries = regionCountries.filter((country) => country.name.common.toLowerCase().includes(inputValue.toLowerCase()))

        setFilterData(inputCountries)

    }


    let filterBySubregion = (event) => {
        console.log("on filterBySubregion")
        let selectedRegion = document.getElementById("region").value
        let selectedSubRegion = event.target.value
        let copyOfCountryList = JSON.parse(JSON.stringify(countryiesData.countryiesList))
        console.log("copyOfCountryList " + copyOfCountryList)

        let subRegionsData = copyOfCountryList.filter((country) => {
            return country.region.toLowerCase() == selectedRegion.toLowerCase() && country.subregion.toLowerCase() == selectedSubRegion.toLowerCase()
        })
        setFilterData(subRegionsData)
    }

    let sortByPopulation = (event) => {
        console.log("on sortByPopulation")
        let copyOfFilterData = JSON.parse(JSON.stringify(filterListData))

        if (event.target.value.toLowerCase() == "sortpopulationbyassending") {
            let sortedData = copyOfFilterData.sort((country1, country2) => {
                console.log(country2.population - country1.population)
                return country1.population - country2.population
            })
            setFilterData(sortedData)
        } else {
            let sortedData = copyOfFilterData.sort((country1, country2) => {
                return country2.population - country1.population
            })
            setFilterData(sortedData)
        }
    }

    let sortByArea = (event) => {

        console.log(event.target.value)
        if (event.target.value == 'sortByAreaAsd') {
            let copyFilterData = JSON.parse(JSON.stringify(filterListData))
            let sortedData = copyFilterData.sort((country1, country2) =>
                country1.area - country2.area)
            setFilterData(sortedData)
        }
        else {
            let copyFilterData = JSON.parse(JSON.stringify(filterListData))
            let sortedData = copyFilterData.sort((country1, country2) =>
                country2.area - country1.area)
            setFilterData(sortedData)
        }

    }
    console.log(props, "props")
    return (
        <MainContext.Provider value={{ style, updateStyle, modeText, regionList, filterListData, searchBySection, searchByInputValue, filterBySubregion, subRegion, sortByPopulation, sortByArea }}>

            {countryiesData.length == 0 ? <div id="loader"></div> : props.children}

        </MainContext.Provider>
    )
}

export default MainStateContext;