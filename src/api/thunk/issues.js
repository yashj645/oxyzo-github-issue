import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchIssues = createAsyncThunk(
  "issues/fetchIssues",
  async ({ page }) => {
    const response = await axios.get(
      `https://api.github.com/repos/facebook/react/issues?page=${page}&per_page=10`
    );

    // as the github open apis were giving timout error after some tries so created dummy json placeholder apis to test
    // const response = await axios.get(
    //   `http://localhost:3000/issues?_page=${page}&_per_page=25`
    // );
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

    // as the github open apis were giving timout error after some tries so created dummy json placeholder apis to test
    // const response = await axios.get("http://localhost:3000/open_issues_count");
    return response.data;
  }
);

export const fetchClosedIssuesCount = createAsyncThunk(
  "issues/fetchClosedIssuesCount",
  async () => {
    const response = await axios.get(
      "https://api.github.com/search/issues?q=repo:facebook/react+type:issue+state:closed"
    );

    // as the github open apis were giving timout error after some tries so created dummy json placeholder apis to test
    // const response = await axios.get("http://localhost:3000/total_count");
    return response.data;
  }
);
