function Sign({ content, nickname, country}) {
    return (
        <div>
            <p> {content}</p>
            <hr/>
            <div>
                <div>
                    Zapisany przez <b>{nickname}</b>
                    {country && <span> z {country}</span>}
                </div>
            </div>
        </div>
    );
}
export default Sign;