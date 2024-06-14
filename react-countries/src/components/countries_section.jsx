// import fetchData from './data.jsx'

import styleContext from "../context/styleContext";
import { useContext } from "react";



function CountrySection({ data }) {
    let { style } = useContext(styleContext)
    let countryCardStyle = style.backGroundStyle
    return <div className={countryCardStyle.CountrySectionStyle} >
        {
            data.map((country) => (
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