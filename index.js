//-------npm i redux------------
//-------write to CMD: "node index.js"------

const REDUX= require("redux")
// --------start action type--------
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
// --------end action type--------

// --------start action creator--------
const increment = () => {
    return {
        type: INCREMENT,
        payload: "increment 1"
    }
}
const decrement = () => {
    return {
        type: DECREMENT,
        payload: "decrement 1"
    }
}
//-------- end action creator--------

// --------start reducer--------
const initialState = {
    count: 1
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT: {
            return { ...state, count: state.count + 1 }
        }
        case DECREMENT: {
            return { ...state, count: state.count - 1 }
        }
        default: {
            return state
        }
    }
}
// --------end reducer--------

const store=REDUX.createStore(reducer)
console.log(store.getState());
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
console.log(store.getState());