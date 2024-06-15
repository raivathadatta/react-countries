
import { useContext } from "react";

import StyleContext from "../context/styleContext";
function NavBar() {
    let { style, updateStyle } = useContext(StyleContext)
    let navBarStyle = style.backGroundStyle
    return (
        <header className={navBarStyle.headerStyle}>
            <h1 className="font-bold text-[2vi]" >   Where In The World?</h1>
            <button className="font-light" onClick={updateStyle}>Dark Mode</button>
        </header>
    )
}
export default NavBar