import { useState, useEffect } from "react";

const BoxofficeList = ({tDt}) => {
    const [mvlist, setMvList] = useState();    

    useEffect(() => {
        console.log("useEffect 실행");
        if (!tDt) return;
        const apikey = 'f5eef3421c602c6cb7ea224104795888';        
        let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${tDt}`;
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
        })
        .catch((err) => console.log(err))
    }, []);

    return (        
        <div>
            <div>
                {tDt && mvlist}
            </div>
            <div>
                상세
            </div>
        </div>        
    ) ;
}

export default BoxofficeList;