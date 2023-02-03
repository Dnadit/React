

const C1 = ({c1, c2, setMid}) => {
    // 배열을 map으로 순회하면서 카드를 만든다 ?
    c1 = c1.map((v) => <div className='c1detail' key={v} onClick={(v) => showMid(v)}>{v}</div>)
    
    // 중분류 항목들 보여주기
    const showMid = (v) => {
        setMid(v);
    };
    return(
        <>           
            <div className='c1'>
                <h2>대분류</h2>
                <div>
                    {c1}
                </div>
            </div>
        </>
    );
}
export default C1;