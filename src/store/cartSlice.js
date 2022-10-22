
const { createSlice } = require("@reduxjs/toolkit");
const initialState=[]; // empty array


const cartSlice=createSlice(
    { // pass a object
name:'cart',
initialState,
reducers:{ // reducers are function with the help of that we mutate our state 
    // in reducer we create a function by the help of this fun we will change our state
   // add and remove are our reducers 
   // reducers are called pure functions 
    
    add(state,action) { // to add item--> it take two arguments 
        // redux tell us that directly don't change the state 
        // in pure redux we did like below
        //return [...state,action.payload]; // but create slice method enternaly did this 

        state.push(action.payload); // mutating the state directly 
        // but createSlice method allow us to mutate the state directly 
    }, 
    remove( state,action) { // to pop the item 
        return state.filter((item)=>item.id !== action.payload)
    },
}
}
)
export const{add,remove}=cartSlice.actions;
export default cartSlice.reducer;
