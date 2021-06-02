import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ size }) => css`
    position: relative;

    label {
      font-size: ${size < 420 ? "0.8rem" : ""};
      top: ${size < 420 ? "2" : ""};
    }

    p.Mui-error {
      position: absolute;
      left: 14px;
      bottom: -20px;
      margin: 0;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type="number"] {
      -moz-appearance: textfield;
    }
  `}
`;
