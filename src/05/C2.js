
const C2 = ({c2}) => {
    c2 = c2.map((v)=><div className='c2detail' key={v}>{v[1]}</div>)
    


    return(
        <>            
            <div className='c2'>
                <h2>중분류</h2>
                <div>
                    {c2}
                </div>
            </div>
        </>
    );
}
export default C2;