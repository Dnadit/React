const Mydiv11 = (probs) => {
    const user = probs.user ;

    return (
        <div className = "mydiv11">
            <h3>div11</h3>
            <p>
                {user}
            </p>
            <p>
                {probs.divname}
            </p>
        </div>
    ) ;
}

export default Mydiv11 ;