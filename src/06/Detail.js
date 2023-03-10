const Detail = ({ selDetail }) => {
    let keys = ["galWebImageUrl", "galTitle", "galPhotographyLocation", "galPhotographer", "galPhotographyMonth", "galSearchKeyword"];
    let dtag = keys.map((k) =>
        k.includes("Url")
            ? <img src={selDetail[k]} className='img' key={k} />
            :
            k.includes("Title")
                ? <h1 className={k} key={k}>{selDetail[k]}</h1>
                : 
                k.includes("Month")
                ? <h3 className={k} key={k}>{selDetail[k].substr(0, 4)}.{selDetail[k].substr(4, 6)}</h3>
                : <h3 className={k} key={k}>{selDetail[k]}</h3>
    );

    return (
        <>
            <div className='detail'>
                {dtag}                
            </div>
        </>
    );
}
export default Detail;