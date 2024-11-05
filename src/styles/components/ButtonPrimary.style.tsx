import styled, { css } from "styled-components";

type ButtonPrimaryPropsType = {
    secondary?: boolean,
}

export const ButtonPrimary = styled.button<ButtonPrimaryPropsType>`
  margin-top: 40px;
  margin-left: 20px;
  width: 86px;
  height: 30px;
  border-radius: 5px;
  background-color: #3e3ee6;
  color: white;
  border: none;
  font-size: 10px;

  ${props => props.secondary && css`
    background-color: white;
    color:  #3e3ee6;
    border: 2px solid #3e3ee6
  `}
`;
