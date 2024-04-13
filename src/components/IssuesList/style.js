import styled from "styled-components";
import {
  BORDER_COLOR_DEFAULT,
  HEADER_BACKGROUND_COLOR,
  GREY_1,
  PRIMARY,
  SUCCESS,
  ACCENT,
} from "../../constants/variables";

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  padding: 0;
  margin: 80px 0;

  @media screen and (min-width: 545px) {
    padding: 0 16px;
  }

  @media screen and (min-width: 768px) {
    padding: 0 24px;
  }

  @media screen and (min-width: 1012px) {
    padding: 0 32px;
  }
`;

const Tabular = styled.div`
  border: 1px solid ${BORDER_COLOR_DEFAULT};
  border-radius: 6px;
`;

const Header = styled.div`
  background-color: ${HEADER_BACKGROUND_COLOR};
  display: flex;
  gap: 20px;
  padding: 16px;
  border-radius: 6px;
  border-bottom: 1px solid ${BORDER_COLOR_DEFAULT};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

const OpenCount = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${PRIMARY};
  font-weight: 600;
`;

const ClosedCount = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${GREY_1};
`;

const Issues = styled.div`
  display: "flex";
  flex-direction: column;
`;

const Issue = styled.div`
  padding: 8px 8px 8px 16px;
  display: flex;
  gap: 8px;
  border-bottom: 1px solid ${BORDER_COLOR_DEFAULT};

  &:last-child {
    border-bottom: none;
  }

  svg {
    color: ${SUCCESS};
  }
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90%;

  @media screen and (min-width: 545px) {
    max-width: 70%;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const Title = styled.h4`
  margin: 0;
  font-weight: 600;
  color: ${PRIMARY};
  font-size: max(16px, 1.111vw);
`;

const Description = styled.p`
  margin: 8px 0 0;
  font-size: max(12px, 0.833vw);
  color: ${GREY_1};
`;

const CommentWrapper = styled.div`
  margin-left: auto;
  color: ${GREY_1};
  padding-right: 16px;
  align-items: flex-start;
  gap: 6px;
  display: none;

  @media screen and (min-width: 545px) {
    display: flex;
  }

  svg {
    color: ${GREY_1};
  }

  &:hover {
    color: ${ACCENT};

    svg {
      color: ${ACCENT};
    }
  }

  span {
    font-size: max(12px, 0.833vw);
  }
`;

const Navbar = styled.header`
  background-color: ${HEADER_BACKGROUND_COLOR};
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid ${BORDER_COLOR_DEFAULT};
`;

export default {
  Container,
  Wrapper,
  Tabular,
  Header,
  OpenCount,
  ClosedCount,
  Issues,
  Issue,
  Data,
  TitleWrapper,
  Title,
  Description,
  CommentWrapper,
  Navbar,
};
