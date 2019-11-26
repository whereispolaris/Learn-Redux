import React from 'react';
import Photo from './Photo';

// import Comments

const Single = React.createClass({
    render() {
        const { posts, params } = this.props
        // index of the post
        const i = posts.findIndex((post) => post.code === params.postId)
        console.log(i);
        // get us the post
        const post = posts[i];
        console.log(post);
        return (
            <div className="single-photo">
                <Photo
                    {...this.props}
                    key={i}
                    i={i}
                    post={post} />
            </div>
        )
    }
})

export default Single;