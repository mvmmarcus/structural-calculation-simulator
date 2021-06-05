import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ size, isLoading }) => css`
    width: 100%;
    height: 100%;
    padding: 40px;
    display: flex;

    #mobile-content {
      padding: 32px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    #content {
      padding: 32px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    form {
      position: relative;

      #loading {
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 1;
        svg {
          opacity: 1;
        }
      }

      .input_group {
        width: 100%;
        margin: 0 0 20px;

        opacity: ${isLoading ? 0.5 : 1};

        .MuiGrid-container {
          width: 100%;
          margin: 0;
        }
      }
      .button_group {
        gap: ${size < 420 ? "20px" : ""};
        padding: 0 20px;

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
