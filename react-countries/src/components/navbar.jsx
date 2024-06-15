
import { useContext } from "react";

import contextmian from "../context/context-main";
import { BiMoon } from "react-icons/bi";
function NavBar() {
    let { style, updateStyle  ,modeText} = useContext(contextmian)
    let navBarStyle = style.backGroundStyle
    return (
        <header className={navBarStyle.headerStyle}>
            <h1 className="font-bold text-[2vi]" >  Where In The World?</h1>
           <div  className="font-bold flex justify-between  w-[11%] items-center"> <BiMoon/> <button onClick={updateStyle}>{modeText}</button></div>
        </header>
    )
}
export default NavBar