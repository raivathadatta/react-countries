import styleContext from "../context/styleContext";
import { useContext } from "react";

function SearchBar() {
    let {style,searchBySection,regionList,searchByInputValue,subRegion,filterBySubregion} = useContext(styleContext)
    let searchStyle = style.backGroundStyle
  


    return (
        <div className = {searchStyle.headerBackgroundStyle}   >
            <input type="text" onKeyUp={searchByInputValue} className={searchStyle.filterStyle}   placeholder= "Search for country .."/>
            <select name="search"  onChange={searchBySection} className={searchStyle.filterStyle} id = "region">
                <option hidden value="filterbyregion" >Filter by region</option>
                <option  value="all" >All</option>
                {regionList.map((value)=>
                     <option key={value} value={value}>{value}</option>
                )}
             
            </select>
            <select name="searachBySubRegion"  onChange={filterBySubregion} className={searchStyle.filterStyle} id = "subregion">
                <option hidden value="filterbyregion" >Filter by sub-region</option>
                <option  value="all" >All</option>
                {subRegion.map((subRegionCountry)=>
                     <option key={subRegionCountry} value={subRegionCountry.toLowerCase()}>{subRegionCountry}</option>
                )}
             
            </select>
        </div>
    );
}



export default SearchBar