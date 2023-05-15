import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./slices/countSlice";
import memoSlice from "./slices/memoSlice";
export default configureStore({
  reducer: { count: countSlice, memo: memoSlice },
});
