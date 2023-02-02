import Mydiv11 from "./Mydiv11";
import { useState, useEffect } from "react";

const Mydiv1 = ({rname, n, setN}) => {    
    //const user = probs.user ; // Object(probs)의 key(user)의 value를 가져옴.
    let [cnt, setCnt] = useState(0) ;

    const addCnt = () => {
        setCnt(++cnt) ;        
        console.log(cnt);
        //setN(cnt);      
    }
    //setN(cnt); << 명령어를 통해 무조건 실행 시킴 , 불필요한 실행을 막는것이 좋아 이렇게 코딩하는것은 좋지 않음.
    useEffect(() => {
        setN(cnt) ;
    }, [cnt]);

    return(
        <div className = "mydiv1">
            <h2 className = "divh2">Mydiv1 {rname} n={n}</h2>
            <Mydiv11 user={rname} divname={'사용자정의' + cnt} />
            <div className = "divbt">
                <button onClick={addCnt}>💜</button>
                <span>{cnt}</span>
            </div>
        </div>  
    ) ;
}

export default Mydiv1 ;