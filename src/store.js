import { configureStore } from "@reduxjs/toolkit";
import issueReducer from "./api/slices/issues";

export default configureStore({
  reducer: {
    issues: issueReducer,
  },
});
