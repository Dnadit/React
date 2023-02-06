const Detail = ({ selDetail }) => {
    let keys = ["galWebImageUrl", "galTitle", "galPhotographyLocation", "galPhotographer", "galPhotographyMonth", "galSearchKeyword"];
    let dtag = keys.map((k) =>
        k.includes("Url")
            ? <img src={selDetail[k]} className='img' />
            :
            k.includes("Title")
                ? <h1 className={k}>{selDetail[k]}</h1>
                : <h3 className={k}>{selDetail[k]}</h3>
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