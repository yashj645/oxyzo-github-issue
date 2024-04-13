import { createSlice } from "@reduxjs/toolkit";
import {
  fetchClosedIssuesCount,
  fetchIssues,
  fetchOpenIssuesCount,
} from "../thunk/issues";

const initialState = {
  loading: false,
  data: {
    nextPage: null,
    result: [],
  },
  error: null,
  metaData: {
    openIssuesCount: null,
    closedIssuesCount: null,
  },
};

const issuesSlice = createSlice({
  name: "issues",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchIssues.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchIssues.fulfilled, (state, action) => {
        state.loading = false;
        if (state.data)
          state.data = {
            nextPage: action.payload.nextPage,
            result: [...state.data.result, ...action.payload.data],
          };
      })
      .addCase(fetchIssues.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(fetchOpenIssuesCount.fulfilled, (state, action) => {
        state.metaData.openIssuesCount = action.payload.open_issues_count;
      })
      .addCase(fetchClosedIssuesCount.fulfilled, (state, action) => {
        state.metaData.closedIssuesCount = action.payload.total_count;
      });
  },
  reducers: {
    resetIssues(state) {
      state.loading = false;
      state.data = {
        nextPage: null,
        result: [],
      };
      state.error = null;
    },
  },
});

export const { resetIssues } = issuesSlice.actions;

export default issuesSlice.reducer;
