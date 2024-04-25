import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  counter: number;
}

const initialState: CounterState = {
  counter: 0,
};

export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  // Each reducer function has a state parameter which is just equal to the initialState.
//   Reducers are nothing but funcitons which perform operations
  reducers: {
    increment: (state) => { // state has the intial state value..it will change..once this actions are performed
      state.counter += 1;
    },
    decrement:(state)=> {
        if(state.counter !==0) {
            state.counter -= 1;
        }
    }
  },
});

// Export the actions

export const {increment, decrement} = CounterSlice.actions;

// export reducer function

export default CounterSlice.reducer;
