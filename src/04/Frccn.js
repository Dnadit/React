
const Fcrcn = ({cn, dt}) => {
    console.log("cn", cn);

    let infoArr = cn.split(','); //문자열을 배열의 형태로 변경.
    let kn = 0;
    infoArr = infoArr.map((v) => 
    v.includes('높음') ?
    <li key={dt + kn++}><span>{v.split(':')[0]}</span>(<span style={{color:'red'}}>{v.split(':')[1]}</span> )</li>  :
    <li key={dt + kn++}><span>{v.split(':')[0]}</span>(<span>{v.split(':')[1]}</span> )</li>              
    );    

    return (
        <div className="mainbox2">
            <div className='detail'>
               <ul>
               {infoArr}
               </ul>
            </div>
        </div>
    ) ;
}

export default Fcrcn;