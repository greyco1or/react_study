import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Main(props) {
    //ThemeContext 참조하도록 정의
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div style={{
            backgroundColor: theme === 'light' ? '#fff' : '#000',
            color: theme === 'light' ? '#000' : '#fff'
        }}>
            <h3>Main</h3>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}

export default Main;