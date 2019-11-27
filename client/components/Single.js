import React from 'react';
import Photo from './Photo';

import Comments from './Comments';

const Single = React.createClass({
    render() {
        const { posts, params, comments } = this.props
        // index of the post
        const i = posts.findIndex((post) => post.code === params.postId)
        // get us the post
        const post = posts[i];
        const postComments = comments[params.postId] || [];
        return (
            <div className="single-photo">
                <Photo
                    {...this.props}
                    key={i}
                    i={i}
                    post={post} />
                <Comments postComments={postComments} {...this.props} />
            </div>
        )
    }
})

export default Single;