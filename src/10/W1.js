import itemData from "../db/item.json";
import weather2Data from "../db/weather2.json";
import Wheader from "./Wheader";
import { useState, useEffect } from "react";

const W1 = () => { 
    //state 변수
    const [items, setItems] = useState();
    const [itemTag, setItemTag] = useState();

    //useEffect
    /* 랜더링이 발생될 때 마다 실행
    useEffect(() => {}); */
    //맨처음 컴포넌트 랜더링시 실행
    useEffect(() => {        
        setItems(weather2Data.response.body.items.item);
    }, []);
    //특정 state변수 변경시 실행 undefined << useState를 통해 items가 생성(변경)되었음.
    useEffect(() => {
        if(!items) return ;

        console.log("items", items);
        let temp = items.map((i, n) =>
            <div className="w2div" key={"w2div" + n}>
                <span className="sp0">{itemData[i.category][0]}</span>
                <span className="sp1">{i.obsrValue}</span>
                <span className="sp2">{itemData[i.category][1]}</span>                
            </div>
        );

        setItemTag(temp);
    }, [items]);


    return (
        <div className="content">
            <Wheader title={'일기예보-단기'} />
            {items && itemTag}
        </div>
    ) ;
}

export default W1;