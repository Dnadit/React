const List = ({ list, setSelList, selList }) => {
    const showDetail = (v) => {
        setSelList(v);
    }    

    const listDetail = list.map((v) =>
        <li
            className={
                selList === v
                    ? 'cliked'
                    : 'listDetail'
            }
            key={v}
            onClick={() => showDetail(v)}>
            {v}
        </li>);

    return (
        <>
            <ul className='list'>
                {listDetail}
            </ul>
        </>
    );
}
export default List;