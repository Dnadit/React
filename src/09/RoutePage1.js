import { useParams } from "react-router-dom";

const RoutePage1 = () => {
    const item = useParams().item ;
    console.log(item)

    const fruits = ['μ¬κ³Όπ', 'λ°λλπ']
    let tag ;
    if (fruits.includes(item)) tag = "κ³ΌμΌ μλλ€.";
    else tag = "κ³ΌμΌμ΄ μλλλ€." ;


    return (
        <>
            <h1>PAGE1</h1>
            {`${item}λ ${tag}`}
        </>
    ) ;
}
export default RoutePage1 ;