import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/reducers/CounterSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { RootState } from "./redux/store/store";
//state.counter.counter
function App() {
  const counter = useSelector((state: RootState) => state.counter.counter); // Specify RootState type
  const dispatch = useDispatch(); // Get the dispatch function

  return (
    <>
        <Typography variant="h4" sx={{display: 'flex', justifyContent: 'center', mt:8}}>Counter App Using Redux</Typography>
      <Box sx={{display: 'flex',alignItems: 'center', justifyContent: 'center',height:'100px', gap: 3}}>
        <Button variant="contained" onClick={() => dispatch(increment())}>
          <AddIcon />
        </Button>
        {counter}
        <Button variant="contained" onClick={() => dispatch(decrement())}>
          <RemoveIcon />
        </Button>
      </Box>
    </>
  );
}

export default App;

// We have to get the data stored inisde the store..inside our App component..
// So, for that..react-redux provides us with 2 things..
// useSelector, useDispatch

// useSelector will allow us to extract data from the store.
// useDispatch hook returns a reference to the dispatch function from the Redux store. we use it to dispatch actions as needed.
