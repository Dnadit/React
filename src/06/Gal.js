//한국관광공사_관광사진 정보_GW
// https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=서비스키&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%eb%b6%80%ec%82%b0+%ec%b6%95%ec%a0%9c&_type=json
// galContentId	string  콘텐츠 아이디
// galContentTypeId	string 콘텐츠 타입 아이디
// galTitle	string 제목
// galWebImageUrl	string 웹용 이미지 경로
// galCreatedtime	string 등록일
// galModifiedtime	string 수정일
// galPhotographyMonth	string 촬영월
// galPhotographyLocation	string 촬영장소
// galPhotographer	string 촬영자
// galSearchKeyword	string 검색 키워드

import List from "./List";
import Detail from "./Detail";
import "./Gal.css";
import { useEffect, useState } from "react";
import data from "../db/data.json";


const Gal = () => {  
  //list   
  const galData = data.response.body.items.item
  console.log("galData", galData) ;
  const list = galData.map((item)=> item.galTitle)
  console.log("list", list) ;
  //Detail
  
  //state list 선택
  let [selList, setSelList] = useState();
  console.log("selList", selList) ;

  //Detail로 selList 넘겨주기
  let [selDetail, setSelDetail] = useState();
  useEffect(()=>{
    selList && setSelDetail(galData.filter((item) => item.galTitle === selList)[0]);
  }, [selList]);
  console.log("selDetail", selDetail);


  return (
    <div className='content'>
      <List list={list} setSelList={setSelList} selList={selList} />
      {selDetail && <Detail selDetail={selDetail} />}
    </div>
  );
}

export default Gal;