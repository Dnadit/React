const GalCard2 = ({cardItem}) => {
    console.log("GalCard2 cardItem", cardItem)
    return (
        <div className="concard"> 
            <div><img src={cardItem.WebImageUrl} /></div>
            <div>{cardItem.Title}</div>  
            <div className="conkw">{cardItem.Month.substr(0,4)}.
            {cardItem.Month.substr(4,6)}
            </div> 
            <div className="conkw">{cardItem.Photographer}</div>  
            <div className="conkw">{cardItem.SearchKeyword}</div>
 
        </div>
    ) ;
}

export default GalCard2 ;