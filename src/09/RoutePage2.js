import { useLocation } from "react-router-dom";
import qs from "query-string";

const RoutePage2 = () => {  
    let location = useLocation().search ;
    console.log("location", location) ;
    let item = qs.parse(location);
    console.log("item", item) ;
    return (
        <>
            <h1>PAGE2</h1>
        </>
    );
}
export default RoutePage2;