import React, { useState } from "react";

function useCount() {
    const [count, setCount] = useState(0);
}

export default useCount;