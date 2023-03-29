import React, { useEffect, useState } from "react";
import useCount from "./useCount";

function CalculateComp(props) {
    //useCount 불러오기
    const [count, plus, minus] = useCount();
    const [isZero, setIsZero] = useState(true);
    
    /*
    useEffect(() => {
        console.log('useEffect');
    })
    */
    
    //위와 달리 아래와 같이 빈배열을 넣으면 didMount처럼 mounting 했을 때 한번만 출력
    useEffect(() => {
        console.log('useEffect');
    }, [])


    //컴포넌트 업데이트마다 실행(버튼 클릭시 count가 변경되니까 count 출력)
    useEffect(() => {
        console.log('count')
        if (count === 0) {
            setIsZero(true);
        } else {
            setIsZero(false);
        }
    }, [count])

    return (
        <div>
            <h3>Count: {count} / {`${isZero}`}</h3>
            <button onClick={plus}>Plus</button>
            <button onClick={minus}>Minus</button>
        </div>
    )
}

export default CalculateComp;