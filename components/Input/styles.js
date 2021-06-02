import styled from "styled-components";

export const Container = styled.div`
  position: relative;

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
`;
