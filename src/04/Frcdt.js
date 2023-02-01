const Fcrdt = ({dt, setDt}) => {
    let dtdiv1Tag = [...dt]; //스프레드 연산자.    

    const show = (k) => {
        console.log("show", k);
        setDt(k);
    }
    
    dtdiv1Tag = dtdiv1Tag.map((v) => 
        <div className="dtdiv1" key={v} onClick={() => show(v)}>{v}</div>
    ) ;

    console.log("frcdt", dtdiv1Tag)

    return (
        <div className="mainbox1">
            {dtdiv1Tag}
        </div>
    ) ;
}

export default Fcrdt;