// import fetchData from './data.jsx'

import contextmian from "../context/context-main";
import { useContext } from "react";



function CountrySection() {

    let { style,filterListData } = useContext(contextmian)
    let countryCardStyle = style.backGroundStyle
    console.log(filterListData[0], "filterListData.length")
    return <div className={countryCardStyle.CountrySectionStyle} >
        {
            filterListData.map((country) => (
                <div key={country.name.common} className={countryCardStyle.countryCardStyle} id='card-container' >
                    <img src={country.flags.png} alt={country.name.common} className="rounded-xl"/>

                    <div className="p-[3%]">
                        <h1 className="text-2xl font-bold my-[2%]">{country.name.common}</h1>

                        <p className="my-[2%]">
                            <b>population:</b> {country.population}
                        </p>

                        <p className="my-[2%]">
                            <b>Region:</b> {country.region}
                        </p>

                        <p className="my-[2%]">
                            <b>capital:</b> {country.capital}
                        </p>
                    </div>
                </div>
            ))

        }
    </div>

}



export default CountrySection