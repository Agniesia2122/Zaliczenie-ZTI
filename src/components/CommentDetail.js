import React from "react";

const CommentDetail = (props) => {
    return (
        <div className="comment">
            <div className="content">
                <a className="author" href='/'>{props.author}</a>
                <div className="metadata"><span className="date">Dzisiaj o 11:12</span></div>
                <b><i><div className="text">{props.text}</div></i></b>
            </div>
        </div>
    )
}

export default CommentDetail;