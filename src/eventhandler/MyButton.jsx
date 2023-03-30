import React, { useState } from "react";

function MyButton(props) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    console.log("handleClick");
    setIsClicked(true);
  };

  return (
    <button onClick={handleClick} disabled={isClicked}>Button</button>
  );
}

export default MyButton;
