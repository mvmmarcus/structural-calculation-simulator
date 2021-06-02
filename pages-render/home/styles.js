import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
  display: flex;

  #content {
    padding: 32px;
    display: flex;
    flex-direction: column;
  }

  form {
    .input_group {
      margin-bottom: 20px;
    }
    .button_group {
      div {
        &:first-child {
          text-align: left;
        }

        text-align: right;
      }
    }
  }
`;

export const FlexContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
