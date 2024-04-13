import styled from "styled-components";

const LabelWrapper = styled.div`
  background-color: ${(props) => `#${props.$backgroundColor}`};
  color: ${(props) => props.$textColor};
  font-size: max(12px, 0.833vw);
  padding: 0 7px;
  line-height: 1.5;
  color: inherit;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default {
  LabelWrapper,
};
