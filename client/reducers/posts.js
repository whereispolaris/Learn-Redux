// a reducer takes two things:
// 1. the action (information about what happened)
// 2. copy of the current state

function posts(state = [], action) {
    console.log(state, action);
    return state;
}

export default posts;