import React from "react";

function MyButton(props) {

const handleClick = () => {
    console.log('handleClick')
}

    return (
        <button onClick={handleClick}>Button</button>
    )
}

export default MyButton;