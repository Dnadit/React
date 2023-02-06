
const C2 = ({selC2Arr, setSelC2, selC2}) => {
    const showData = (item) => {
        console.log(item) ;
        setSelC2(item[1]);
    } ;
    
    const c2Tag = selC2Arr.map((item) => 
        <div className={item[1]===selC2 ? "tcardSel" : "tcard"} key={[...item]} onClick={() => showData(item)}>
            {item[1]}
        </div>);
    


    return(
        <>            
            <div className='c2'>
                <h2>중분류</h2>
                <div>
                    {c2Tag}
                </div>
            </div>
        </>
    );
}
export default C2;