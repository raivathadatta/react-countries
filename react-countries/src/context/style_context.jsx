import { useState, useEffect } from "react";
import StyleContext from "./styleContext";
// import CountrySection from "../components/countries_section";


let StyleStateContext = (props) => {

    let [countriesList, setCountriesList] = useState([])//country list 

    let [filterListData, setFilterData] = useState([])//filter list

    let [region, setRegion] = useState({})//region list

    let [subRegion, setSubRegion] = useState([])//subregion list
    let regionList = Object.keys(region)
    let [subRegionData, setSubRegionData] = useState([])//subregion



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
            setRegion(regionData)
            setFilterData(data)
            setCountriesList(data)
        }
        fetchData()
    }, [])


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
    // let [style, setStyle] = useState(lightModeStyle)
    let [style, setDark] = useState({ isDarkMode: false, backGroundStyle: lightModeStyle })

    let updateStyle = () => {

        console.log('style.isDarkMode', "updateStyle", "////////////////////////////")
        if (style.isDarkMode) {
            console.log('lightModeStyle changed')
            let darkMode = !style.isDarkMode
            setDark({ isDarkMode: darkMode, backGroundStyle: { ...lightModeStyle } })
        } else {
            console.log('darkModeStyle changed')
            let darkMode = !style.isDarkMode
            setDark({ isDarkMode: darkMode, backGroundStyle: { ...darkModeStyle } })
            console.log(style, "ssssss")

        }

    }




    let searchBySection = () => {
        console.log("seach by section")

        let selectedRegion = document.getElementById("region").value
        if (selectedRegion.toLowerCase() == 'all') {
            let regionCountries = JSON.parse(JSON.stringify(countriesList))
            setFilterData(regionCountries)
            return
        }
        let regionCountries = JSON.parse(JSON.stringify(countriesList))
        regionCountries = regionCountries.filter((country) => {
            return country.region.toLowerCase() == selectedRegion.toLowerCase()
        })
        setSubRegion([...region[selectedRegion]])///adding sub region by data 
        setFilterData(regionCountries)/// adding filter data 
        setSubRegionData(regionCountries)

    }

    let searchByInputValue = (event) => {
        let copyOfCountryList = JSON.parse(JSON.stringify(countriesList))
        let selectedRegion = document.getElementById("region").value
        let regionCountries = selectedRegion.toLowerCase() == 'filterbyregion' ? copyOfCountryList : selectedRegion.toLowerCase() == 'all' ? copyOfCountryList : copyOfCountryList.filter((country) => country.region.toLowerCase() == selectedRegion.toLowerCase())
        let inputValue = event.target.value
        let inputCountries = regionCountries.filter((country) => country.name.common.toLowerCase().includes(inputValue.toLowerCase()))
        setFilterData(inputCountries)
    }


    let filterBySubregion = (event) => {
        let copyOfFilterData = JSON.parse(JSON.stringify(subRegionData))
        let subRegionCounties = copyOfFilterData.filter((country) => country.subregion.toLowerCase() == event.target.value.toLowerCase())
        setFilterData(subRegionCounties)
    }

    let sortByPopulation = (event) => {
        console.log("on sortByPopulation")
        let copyOfFilterData = JSON.parse(JSON.stringify(filterListData))

        if (event.target.value.toLowerCase() == "sortpopulationbyassending") {
            console.log("sortpopulationbyassending")
            let sortedData = copyOfFilterData.sort((country1, country2) => {
                console.log(country2.population - country1.population)
                return country1.population - country2.population
            })
            setFilterData(sortedData)
        } else {
            console.log("sortpopulationbydessending")
            let sortedData = copyOfFilterData.sort((country1, country2) => {
                return country2.population - country1.population
            })
            console.log(filterListData.sort((country1, country2) => country1.population - country2.population))
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
        <StyleContext.Provider value={{ style, updateStyle, regionList, filterListData, searchBySection, searchByInputValue, filterBySubregion, subRegion, sortByPopulation, sortByArea }}>

            {props.children}
        </StyleContext.Provider>
    )
}

export default StyleStateContext;