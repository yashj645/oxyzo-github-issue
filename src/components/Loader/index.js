import React from "react";
import Styled from "./style";

export default function Loader({ isInfinite }) {
  return (
    <Styled.Loader $isInfinite={isInfinite}>
      <Styled.Spinner />
    </Styled.Loader>
  );
}
