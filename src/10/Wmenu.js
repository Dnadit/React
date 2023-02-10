import { useNavigate } from "react-router-dom";
import Wheader from "./Wheader";

const Wmenu = () => {
    const navigate = useNavigate();

    const goUrl1 = (item) => {
        let url1 = `/w1?item=${item}`
        
        navigate(url1);        
    }
    const goUrl2 = (item) => {
        let url2 = `/w2?item=${item}`
        navigate(url2);        
    }

    return (
        <>
        <Wheader title={'일기예보'} />
        <ul>
            <button onClick={() => goUrl1('단기예보')}>단기예보</button>
            <button onClick={() => goUrl2('중기예보')}>중기예보</button>
        </ul>
        </>
    ) ;
}

export default Wmenu;