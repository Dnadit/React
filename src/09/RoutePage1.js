import { useParams } from "react-router-dom";

const RoutePage1 = () => {
    const item = useParams().item ;
    console.log(item)

    const fruits = ['사과🍎', '바나나🍌']
    let tag ;
    if (fruits.includes(item)) tag = "과일 입니다.";
    else tag = "과일이 아닙니다." ;


    return (
        <>
            <h1>PAGE1</h1>
            {`${item}는 ${tag}`}
        </>
    ) ;
}
export default RoutePage1 ;