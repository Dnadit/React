import C1 from "./C1";
import C2 from "./C2";
import Data from "./Data";
import TaccidentmHead from "./TaccidentmHead";
import {useState} from "react";

const Taccidentm = ({c1, c2, data}) => {
    console.log("c1", c1);
    console.log("c2", c2);
    console.log("data", data);

    let [mid, setMid] = useState();
    

    return (
        <>
            <div className='thead'>
                <TaccidentmHead />
            </div>
            <div className='main'>
                <C1 c1={c1} c2={c2} setMid={setMid} />
                <C2 c2={c2} />
                <Data data={data}/>
            </div>
        </>
    ) ;
}
export default Taccidentm;