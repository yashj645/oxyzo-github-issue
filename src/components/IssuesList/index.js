import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { isEmpty, map } from "lodash";
import moment from "moment";

import Loader from "../Loader";
import OpenIcon from "../../icons/open";
import CloseIcon from "../../icons/close";
import CommentIcon from "../../icons/comment";
import GithubIcon from "../../icons/github";
import Styled from "./style";
import Label from "../Label";

export default function IssuesList({
  result,
  /*nextPage,*/ loading,
  metaData,
  handleInfiniteScroll,
}) {
  const { openIssuesCount, closedIssuesCount } = metaData || {};

  if (loading && isEmpty(result)) {
    return <Loader />;
  }

  return (
    <>
      <Styled.Navbar>
        <GithubIcon />
        <span>
          facebook / &nbsp;<b>react</b>
        </span>
      </Styled.Navbar>
      <Styled.Container>
        <Styled.Wrapper>
          <Styled.Tabular>
            <Styled.Header>
              {openIssuesCount && (
                <Styled.OpenCount>
                  <OpenIcon />
                  {openIssuesCount} Open
                </Styled.OpenCount>
              )}
              {closedIssuesCount && (
                <Styled.ClosedCount>
                  <CloseIcon />
                  {closedIssuesCount} Closed
                </Styled.ClosedCount>
              )}
            </Styled.Header>
            <Styled.Issues>
              <InfiniteScroll
                dataLength={result.length}
                next={handleInfiniteScroll}
                hasMore={result.length < openIssuesCount}
                loader={<Loader isInfinite />}
              >
                {map(result, (item, index) => (
                  <Styled.Issue key={`${item.id}-${index}`}>
                    <OpenIcon />
                    <Styled.Data>
                      <Styled.TitleWrapper>
                        <Styled.Title>Bug: {item.title}</Styled.Title>
                        {map(item.labels, (label) => (
                          <Label
                            key={label.id}
                            text={label.name}
                            backgroundColor={label.color}
                          />
                        ))}
                      </Styled.TitleWrapper>
                      <Styled.Description>
                        #{item.number} opened{" "}
                        {moment(item.created_at).fromNow()} by {item.user.login}
                      </Styled.Description>
                    </Styled.Data>
                    {item.comments ? (
                      <Styled.CommentWrapper>
                        <CommentIcon />
                        <span>{item.comments}</span>
                      </Styled.CommentWrapper>
                    ) : null}
                  </Styled.Issue>
                ))}
              </InfiniteScroll>
            </Styled.Issues>
          </Styled.Tabular>
        </Styled.Wrapper>
      </Styled.Container>
    </>
  );
}
