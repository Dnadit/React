import itemData from "../db/item.json";
import weather2Data from "../db/weather2.json";


import Wheader from "./Wheader";

const W1 = () => {
    console.log("itemData", itemData);
    const weather2 = weather2Data.response.body.items.item ;
    console.log("weather2", weather2);
    
    // let w2 = weather2.map((item) => [itemData[item.category][0], item.obsrValue, itemData[item.category][1]]);
    let w2 = weather2.map( (v) => {
        let temp = [];
        temp.push(itemData[v.category][0]);
        temp.push(v.obsrValue);
        temp.push(itemData[v.category][1]);
        return temp;
    })
    console.log("w2", w2)

    const w1tag = w2.map((v) => 
        <span className={v}>{v}</span>
    )
    
    return (
        <>
        <Wheader title={'일기예보-단기'} />
        <div>
            <div className="w1div">
                {w1tag}
            </div>
        </div>
        </>
    ) ;
}

export default W1;