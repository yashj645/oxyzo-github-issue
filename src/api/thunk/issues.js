import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchIssues = createAsyncThunk(
  "issues/fetchIssues",
  async ({ page }) => {
    const response = await axios.get(
      `https://api.github.com/repos/facebook/react/issues?page=${page}&per_page=10`
    );
    return {
      nextPage: page + 1,
      data: response.data,
    };
  }
);

export const fetchOpenIssuesCount = createAsyncThunk(
  "issues/fetchOpenIssuesCount",
  async () => {
    const response = await axios.get(
      "https://api.github.com/repos/facebook/react"
    );
    return response.data;
  }
);

export const fetchClosedIssuesCount = createAsyncThunk(
  "issues/fetchClosedIssuesCount",
  async () => {
    const response = await axios.get(
      "https://api.github.com/search/issues?q=repo:facebook/react+type:issue+state:closed"
    );
    return response.data;
  }
);
