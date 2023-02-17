// const Async = () => {  
//     //fetch 방법1
//     const url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230214';
    
//     let p = fetch(url)
//     .then((resp) => resp.json()) // response가 있어야 resp.json() 가 작동.
//     .then((data) => console.log(data)) // .then은 앞의 .then이 끝나야 작동.
//     .catch((err) => console.log(err))
//     console.log(p);

//     //fetch 방법2
//     const getData = async() => {
//         const url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230214';
//         try {
//             const resp = await fetch(url);
//             const data = await resp.json();

//         } catch {
//             alert("error");
//         }
//     }
//     getData();
    
 
//     return (
//         <>
//         </>
//     ) ;
// }

// export default Async;