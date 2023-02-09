import data from "../db/data.json";
import GalCard from "./GalCard";
import GalCard2 from "./GalCard2";
import "./GalSelect.css";
import { useRef, useState, useEffect } from "react";


const GalSelect = () => {
    
    //데이터 가져오기
    const items = data.response.body.items.item ; 
    console.log("items", items);   
    const c1 = items.map( (obj) => obj.galTitle) ;
    const options = c1.map((v) => <option key={v} value={v}>{v}</option>) ;
    console.log("options", options);
    const [selItem, setSelItem] = useState() ;
    
    
    //select box 제어
    const selR = useRef();

    //컴포넌트가 처음 렌더링이 일어났을때 동작, []에 state 변수값이 들어와야 함.
    useEffect(() => {
        selR.current.focus();
    }, []) ;
    
    //함수 생성    
    const handleSel = () => {
        let temp = items.filter((i) => i.galTitle === selR.current.value) ;
        setSelItem(temp[0]);        
    }

    return (
        <>
        <div className="conright">
            <form>
                <select ref={selR} name="sel1" onChange={handleSel}>
                    {options}
                </select>
            </form>
            { selItem && <GalCard cardItem={selItem} /> }
        </div>            
        </>
    ) ;
    
}
export default GalSelect;