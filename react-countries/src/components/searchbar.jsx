import contextmian from "../context/context-main";
import { useContext } from "react";

function SearchBar() {
    let {style,searchBySection,regionList,searchByInputValue,subRegion,filterBySubregion,sortByPopulation,sortByArea} = useContext(contextmian)
    let searchStyle = style.backGroundStyle
  


    return (
        <div className = {searchStyle.headerBackgroundStyle}   >
            <input type="text" onKeyUp={searchByInputValue} className={searchStyle.filterStyle}   placeholder= "Search for country .."/>
            <select name="search"  onChange={searchBySection} className={searchStyle.filterStyle} id = "region">
                <option hidden value="filterbyregion" >Filter by region</option>
                {regionList.map((value)=>
                     <option key={value} value={value}>{value}</option>
                )}
             
            </select>
            <select name="searachBySubRegion"  onChange={filterBySubregion} className={searchStyle.filterStyle} id = "subregion">
                <option hidden value="filterbyregion" >Filter by sub-region</option>
                {subRegion.map((subRegionCountry)=>
                     <option key={subRegionCountry} value={subRegionCountry.toLowerCase()}>{subRegionCountry}</option>
                )}
             
            </select>
            <select className={style.filterStyle} onChange={sortByPopulation}>
                <option value="sortbypopulation"  hidden>Filter By Population</option>
                <option value="sortpopulationbyassending" >Sort Population Asd</option>
                <option value="sortpopulationbydessending" >Sort Population Decending</option>
            </select>

            <select className={style.filterStyle} onChange={sortByArea}>
                <option value="sortbyArea"  hidden>Filter By Area</option>
                <option value="sortByAreaAsd" >Sort Area Asd</option>
                <option value="sortByAreaDes" >Sort Area Decending</option>
            </select>
        </div>
    );
}



export default SearchBar