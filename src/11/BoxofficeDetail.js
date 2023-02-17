import { useEffect, useState } from "react";

const BoxofficeDetail = ({movieCd}) => {
    const [detail, setDetail] = useState();
    console.log(movieCd);

    useEffect(() => {
        const apikey = 'f5eef3421c602c6cb7ea224104795888';        
        let url = `https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${apikey}&movieCd=${movieCd}`;
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            const detailData = data.movieInfoResult.movieInfo;
            console.log(detailData)
            setDetail(
            <div className="detailbox">
                <div>
                <span className="detailtitle">영화명</span><span>{detailData.movieNm}</span>
                </div>
                <div>
                <span className="detailtitle">개봉일</span><span>{detailData.openDt}</span>
                </div>
                <div>
                <span className="detailtitle">제작상태</span><span>{detailData.prdtStatNm}</span>
                </div>
                <div>
                <span className="detailtitle">영화구분</span><span>{detailData.typeNm}</span>
                </div>
                <div>
                <span className="detailtitle">관람등급</span><span>{detailData.audits[0].watchGradeNm}</span>
                </div>
                <div>
                <span className="detailtitle">상영시간</span><span>{detailData.showTm}분</span>
                </div>
                <div>
                <span className="detailtitle">제작국가</span><span>{detailData.nations[0].nationNm}</span>
                </div>
                <div>
                <span className="detailtitle">감독</span><span>{detailData.directors[0].peopleNm}</span>
                </div>
                <div>
                <span className="detailtitle">장르</span><span>{detailData.genres[0].genreNm}</span>
                </div>
                <div>
                <span className="detailtitle">배급사</span><span>{detailData.companys[0].companyNm}</span>
                </div>
            </div>
            );
                 
        })
        .catch((err) => console.log(err))
    }, [movieCd]);

    return(
        <>                    
            {detail}        
        </>
    );
}

export default BoxofficeDetail;