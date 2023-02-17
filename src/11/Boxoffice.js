import { useRef, useState, useEffect } from "react";
import "./Boxoffice.css";
import BoxofficeList from "./BoxofficeList";

const Boxoffice = () => {
    //변수    
    const mvdater = useRef();
    const [targetDt, setTargetDt] = useState();
    //함수
    useEffect(() => {
        mvdater.current.focus();
    }, []);
    const showmain = () => {       
        setTargetDt(mvdater.current.value.replaceAll('-', ''));
    }
    //리턴
    return (
        <>
            <div className="mvheader">
                <h1>박스오피스</h1>
                <form>
                    <input type="date" name="mvdate" ref={mvdater} onChange={showmain} />
                </form>
            </div>
            <div className="mvmain">
                {targetDt && <BoxofficeList tDt={targetDt} />} 
            </div>
        </>
    );
}

export default Boxoffice;