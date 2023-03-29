import React, { useState } from "react";

function useCount() {
    //count와 관련된 state 생성, setCount를 통해서 count를 업데이트
    const [count, setCount] = useState(0);

    const plus = () => {
        setCount((count) => ++count);
    }
    const minus = () => {
        setCount((count) => --count);
    }
    
    //컴포넌트들이 count를 활용할 수 있도록 return 값에 넣어준다.
    return [count, plus, minus];
}

export default useCount;