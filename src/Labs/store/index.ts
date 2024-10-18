import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../Lab4/ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "../Lab4/ReduxExamples/CounterRedux/counterReducer";

const store = configureStore({
  reducer: { 
    helloReducer,
    counterReducer,
  },
});

export default store;