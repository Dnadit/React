

const C1 = ({c1, selC1, setSelC1}) => {
    // 대분류가 클릭되었을때 함수
    const handleSelect = (item) => {
        setSelC1(item);
    }

    // 대분류 화면 표시 태그 ,배열을 map으로 순회하면서 카드를 만든다 ?
    const c1Tag = c1.map((v) => 
        <div className={v === selC1 ? "tcardSel":"tcard"} key={v} onClick={() => handleSelect(v)}>
            {v}
        </div>
    );
    
    // 중분류 항목들 보여주기
 
    return(
        <>           
            <div className='c1'>
                <h2>대분류</h2>
                <div>
                    {c1Tag}
                </div>
            </div>
        </>
    );
}
export default C1;