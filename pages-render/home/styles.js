import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ size }) => css`
    width: 100%;
    height: 100%;
    padding: 40px;
    display: flex;

    #mobile-content {
      padding: 32px 0 32px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    #content {
      padding: ${size < 420 ? "24px" : "32px"};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    form {
      .input_group {
        margin-bottom: 20px;
      }
      .button_group {
        gap: ${size < 420 ? "20px" : ""};

        div {
          &:first-child {
            text-align: left;
          }

          text-align: right;
        }
      }
    }
  `}
`;

export const FlexContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
