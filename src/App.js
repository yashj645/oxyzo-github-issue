import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchIssues,
  fetchOpenIssuesCount,
  fetchClosedIssuesCount,
} from "./api/thunk/issues";
import { resetIssues } from "./api/slices/issues";
import IssuesList from "./components/IssuesList";

function App() {
  const dispatch = useDispatch();
  const issuesSelector = useSelector((state) => state.issues);
  const {
    loading: isIssuesLoading,
    data: issuesData,
    metaData,
  } = issuesSelector;
  const { nextPage, result: issuesResult } = issuesData || {};

  useEffect(() => {
    dispatch(fetchOpenIssuesCount());
    dispatch(fetchClosedIssuesCount());
    dispatch(fetchIssues({ page: 1 }));

    return () => {
      dispatch(resetIssues());
    };
  }, []);

  const handleInfiniteScroll = () => {
    setTimeout(() => {
      dispatch(fetchIssues({ page: nextPage }));
    }, 1000);
  };

  return (
    <IssuesList
      result={issuesResult}
      nextPage={nextPage}
      loading={isIssuesLoading}
      metaData={metaData}
      handleInfiniteScroll={handleInfiniteScroll}
    />
  );
}

export default App;
