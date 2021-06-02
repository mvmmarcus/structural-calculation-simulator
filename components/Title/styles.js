import styled, { css } from "styled-components";

export const Container = styled.h2`
  ${({ size }) => css`
    font-size: ${size < 420 ? "1.2rem" : ""};
    margin-bottom: 20px;
    margin-top: 0;
  `}
`;
