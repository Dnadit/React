import { Link } from "react-router-dom";

const Wheader = ({title}) => {
    return (
        <div className="header">
            <h1>{title}</h1>
            <div className="icon"><Link to="/">🔙</Link></div>
        </div>
    ) ;
}

export default Wheader;