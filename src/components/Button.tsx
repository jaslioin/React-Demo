import styled, { css } from "styled-components";

export const Button = styled.button<{
  fullWidth?: boolean;
}>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: unset;
  background: unset;
  ${({ fullWidth }) => fullWidth
    && css`
      display: block;
      width: 100%;
    `};
`;
