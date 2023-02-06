const List = ({ list, setSelList, selList }) => {
    const showDetail = (v) => {
        setSelList(v);
    }

    const listDeatil = list.map((v) => <div className={
        selList === v
            ? 'cliked'
            : 'listDetail'
    } key={v} onClick={() => showDetail(v)}>
        {v}
    </div>);
    
    return (
        <>
            <div className='list'>
                {listDeatil}
            </div>
        </>
    );
}
export default List;