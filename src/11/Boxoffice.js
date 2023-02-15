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
                <BoxofficeList tDt={targetDt} />
            </div>
            <div className="mvdetail">
                상세내용 나오기
            </div>
        </>
    );
}

export default Boxoffice;