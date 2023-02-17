import { useState, useEffect } from "react";
import BoxofficeDetail from "./BoxofficeDetail";

const BoxofficeList = ({tDt}) => {
    const [mvlist, setMvlist] = useState();
    const [movieCd, setMovieCd] = useState();

    const showdetail = (movieCd) => {
        setMovieCd(movieCd);
    }

    useEffect(() => {
        console.log("useEffect 실행");
        console.log("targetDt", tDt); 
        const apikey = 'f5eef3421c602c6cb7ea224104795888';        
        let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${tDt}`;
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            let list = data.boxOfficeResult.dailyBoxOfficeList;
            setMvlist(list.map((v) => 
            <div className="mvlist" key={v.movieCd} onClick={() => showdetail(v.movieCd)}>
                <span className="rank">{v.rank}</span>
                <span className="mvname">{v.movieNm}</span>
                <span className="salesshare">{v.salesShare}%</span>
                <span className="audiacc">{parseInt(v.audiAcc).toLocaleString('ko-KR')}명</span>
            </div>));                       
        })
        .catch((err) => console.log(err)) //위의 오류가 나면 catch로 넘어와서 실행.
        
        
    }, [tDt]);
      
    return (
        <>
            <div>
                <div className="mvlist" id="detailtitle">
                    <span className="rank"></span>
                    <span className="mvname">영화명</span>
                    <span className="salesshare">점유율</span>
                    <span className="audiacc">관객수</span>
                </div>
                {mvlist}
            </div>            
            <div className="mvdetail">
                <BoxofficeDetail movieCd={movieCd} />
            </div>
        </>
    ) ;
}

export default BoxofficeList;