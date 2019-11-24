import React from 'react';
import Photo from './Photo';

const PhotoGrid = React.createClass({
    render() {
        return (
            <div className="single-grid">
                {this.props.posts.map(
                    (post, i) => <Photo />
                )}
            </div>
        )
    }
})

export default PhotoGrid;