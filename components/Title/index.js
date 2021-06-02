import React from "react";

import { Container } from "./styles";

export default function Title({
  currentStep = 1,
  totalSteps = 4,
  message = "",
}) {
  return (
    <Container>
      {currentStep}/{totalSteps} - {message}:
    </Container>
  );
}
