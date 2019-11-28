// Increment likes
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

// Add comment
export function addComment(postId, author, comment) {
    console.log("Dispatching add comment");
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

// Remove comment
export function removeComment(postId, index) {
    return {
        type: 'REMOVE_COMMENT',
        index,
        postId
    }
}
