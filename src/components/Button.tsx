import { HTMLAttributes } from "react";
import styled, { css } from "styled-components";

export type ButtonProps = {
  fullWidth?:boolean
} & HTMLAttributes<HTMLButtonElement>

export const Button = ({ children, fullWidth = false, ...rest }:ButtonProps) => (
  <StyledButton fullWidth={fullWidth} {...rest}>
    {children}
  </StyledButton>
);

const StyledButton = styled.button<{
  fullWidth:boolean
}>`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ fullWidth }) => fullWidth && css`
      display: block;
      width:100%;
    `};
`;
