import Wheader from "./Wheader";
import weatherData from "../db/weather.json";

const W2 = () => {
    const weather = weatherData.response.body.items.item ;
    console.log("weather", weather);      
    let j = 3;
    const day = () => {
        for (let i = 0; i < 5; i++) return j++ ;
    }
    console.log("day", day);

    const w2header = () => {
        <div>{`${day}후 날씨`}</div>
    }

    return (
        <div className="content">
        <Wheader title={'일기예보-중기'} />
        {w2header}

        </div>
    ) ;
}

export default W2;