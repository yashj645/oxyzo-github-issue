import React, { useEffect, useState } from "react";
import Styled from "./style";

export default function Label({ text, backgroundColor }) {
  const [textColor, setTextColor] = useState(null);
  useEffect(() => {
    if (backgroundColor) {
      setTextColor(getContrastColor(text, backgroundColor));
    }
  }, [backgroundColor]);

  function getContrastColor(text, bgColor) {
    // Convert background color to RGB
    const rgb = `#${bgColor}`.match(/\d+/g).map(Number);
    const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
    return brightness > 5 ? "black" : "white"; // Change threshold as needed
  }
  return (
    <Styled.LabelWrapper
      style={{ color: textColor }}
      $textColor={textColor}
      $backgroundColor={backgroundColor}
    >
      {text}
    </Styled.LabelWrapper>
  );
}
