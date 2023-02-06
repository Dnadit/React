import C1 from "./C1";
import C2 from "./C2";
import Data from "./Data";
import TaccidentmHead from "./TaccidentmHead";
import { useState, uesEffect, useEffect } from "react" ;


const Taccidentm = ({c1, c2, data}) => {
    // console.log("c1", c1);
    // console.log("c2", c2);
    // console.log("data", data);

    //선택된 대분류
    let [selC1, setSelC1] = useState();
    
    //선택된 대분류에 해당하는 중분류 저장
    let [selC2Arr, setSelC2Arr] = useState();

    // 선택된 중분류
    let [selC2, setSelC2] = useState();

    // 선택된 data
    let [selData, setSelData] = useState();

    //state변수 변경
    useEffect(() => {
        console.log("selC1", selC1);
        selC1 && setSelC2Arr(c2.filter((i) => i[0] === selC1));
    }, [selC1]) ;
    
    useEffect(() => {
        console.log("selC2Arr", selC2Arr);
    }, [selC2Arr]);

    useEffect(() => {
        if (selC1 && selC2) {
            setSelData(data.filter((i)=>i.사고유형_대분류 === selC1 && i.사고유형_중분류 === selC2)[0])
        }
    }, [selC2])

    useEffect(() => {
        //console.log("selData", selData);
    }, [selData])
    


    return (
        <>
            <div className='thead'>
                <TaccidentmHead />
            </div>
            <div className='main'>
                <C1 c1={c1} selC1={selC1} setSelC1={setSelC1} />
                {selC2Arr && <C2 selC2Arr={selC2Arr} setSelC2={setSelC2} selC2={selC2}/>}
                {selData && <Data selData={selData} />}
            </div>
        </>
    ) ;
}
export default Taccidentm;