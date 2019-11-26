import React from 'react';
import Photo from './Photo';

// import Comments

const Single = React.createClass({
    render() {
        // index of the post
        const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId)
        console.log(i);
        // get us the post
        return (
            <div className="single-photo">
                I'm the Single Grid
            </div>
        )
    }
})

export default Single;