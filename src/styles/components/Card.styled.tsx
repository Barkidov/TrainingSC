import styled from "styled-components";

export const Card = styled.div`
  width: 300px;
  height: 350px;
  box-sizing: border-box;
  background-color: #f6f6f6;
  border-radius: 15px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);

  button + button {
    margin-left: 15px;
  }
`;
