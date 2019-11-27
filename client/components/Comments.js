import React from 'react';

const Comments = React.createClass({
    renderComment(comment, i) {
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment">&times;</button>
                </p>
            </div>
        )
    },
    handleSubmit(e) {
        e.preventDefault();
    },
    render() {
        return (
            <div className="comments">
                {this.props.postComments.map(this.renderComment)}
                <form ref="commentForm" className="comment-form" onSubmit={this.handeSumit}>
                    <input type="text" ref="author" placeholder="author" />
                    <input type="text" ref="comment" placeholder="comment" />
                    <input type="submit" hidden />
                </form>
            </div>
        )
    }
});

export default Comments;