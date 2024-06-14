import { useState } from "react";
import StyleContext from "./styleContext";
// import CountrySection from "../components/countries_section";

const StyleStateContext = (props) => {
    let lightModeStyle = {
        bodyStyle: 'bg-white text-black',
        headerBackgroundStyle: 'flex flex-row justify-between p-[1%] bg-[#FFFFFF]',
        headerStyle: "flex flex-row justify-between shadow-md p-[1%] bg-[#FFFFFF]",
        filterStyle: "bg-gray-100 text-blackshadow-md outline-none p-[1%] w-[25%]",
        countryCardStyle: 'w-[22%] m-4 shadow-md rounded-xl bg-white ',
        CountrySectionStyle: "flex flex-wrap justify-between bg-white text-black"
    }
    let darkModeStyle = {
        bodyStyle: 'bg-black',
        headerBackgroundStyle: 'flex flex-row justify-between p-[1%] bg-black',
        headerStyle: "flex flex-row justify-between shadow-md p-[1%] bg-black text-white",
        countryCardStyle: 'w-[22%] m-4 box-shadow-white shadow-md rounded-xl bg-gray-400 ',
        filterStyle: "bg-gray-300 text-black boder-white p-[1%] w-[25%]",
        CountrySectionStyle: "flex flex-wrap justify-between bg-black text-black"
    }
    // let [style, setStyle] = useState(lightModeStyle)
    let [style, setDark] = useState({isDarkMode: false,backGroundStyle:lightModeStyle})

    let updateStyle = () => {

        console.log('style.isDarkMode', "updateStyle", "////////////////////////////")
        console.log("")
        // setDark(!isDark)
       
        // darkMode?  setDark({darkMode,darkModeStyle}): setDark({darkMode,lightModeStyle})
        if (style.isDarkMode) {
            console.log('lightModeStyle changed')
            let darkMode = !style.isDarkMode
            setDark({isDarkMode:darkMode,backGroundStyle:{...lightModeStyle}})
        } else {
            console.log('darkModeStyle changed')
            let darkMode = !style.isDarkMode
            setDark({isDarkMode:darkMode,backGroundStyle:{...darkModeStyle}})
            console.log(style,"ssssss")
           
        }

    }


    console.log(props, "props")
    return (
        <StyleContext.Provider value={{ style, updateStyle }}>
            {props.children}
        </StyleContext.Provider>
    )
}

export default StyleStateContext;