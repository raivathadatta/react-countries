import styleContext from "../context/styleContext";
import { useContext } from "react";

function SearchBar({inputSearch,sectionChange,regionData}) {
    let {style} = useContext(styleContext)
    let searchStyle = style.backGroundStyle
    return (
        <div className = {searchStyle.headerBackgroundStyle}   >
            <input type="text" onKeyUp={inputSearch} className={searchStyle.filterStyle}   placeholder= "Search for country .."/>
            <select name="search" onChange={sectionChange} className={searchStyle.filterStyle} >
                <option hidden value="filterbyregion" >Filter by region</option>
                <option  value="all" >All</option>
                {regionData.map((region)=>
                     <option key={region} value={region.toLowerCase()}>{region}</option>
                )}
             
            </select>
        </div>
    );
}



export default SearchBar