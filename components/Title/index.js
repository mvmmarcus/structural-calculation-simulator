import React from "react";

import { Container } from "./styles";
import { useWindowSize } from "../../hooks";

export default function Title({
  currentStep = 1,
  totalSteps = 4,
  message = "",
}) {
  const size = useWindowSize();

  return (
    <Container size={size}>
      {currentStep}/{totalSteps} - {message}:
    </Container>
  );
}
