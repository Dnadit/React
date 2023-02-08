import { useEffect, useRef, useState } from "react";

const List = ({ list, setSelList, selList }) => {
    let txtR = useRef();
    
    useEffect(() => {
        txtR.current.focus();
    }, []);

    const showDetail = (v) => {
        setSelList(v);
    }    

    const [listDetail, setListDetail] = useState() ;    

    const showList = () => {                
        let temp = list.filter((item) => item.includes(txtR.current.value));
        console.log("temp", temp);         
        console.log("selList", selList);
        setListDetail(temp.map((v) =>        
        <li
            className={
                selList === v
                    ? 'cliked'
                    : 'listDetail'
            }
            key={v}
            onClick={() => showDetail(v)}>
            {v}
        </li>));
    }

    useEffect(() => {
        showList();
    }, []);

    // const listDetail = list.map((v) =>
    //     <li
    //         className={
    //             selList === v
    //                 ? 'cliked'
    //                 : 'listDetail'
    //         }
    //         key={v}
    //         onClick={() => showDetail(v)}>
    //         {v}
    //     </li>);

    return (
        <div className='list'>
            <div>
                <form>
                    <input ref={txtR} type="text" name="txt1" onChange={showList}/>
                    <button type="reset" onClick={showList}>취소</button>
                </form>
            </div>
            <ul>
                {listDetail}
            </ul>
        </div>
    );
}
export default List;