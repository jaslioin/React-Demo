import { HTMLAttributes } from "react";
import styled from "styled-components";

type Variant = "primary";
export type TypographyProps = {
  variant?: Variant;
  color?: string;
} & HTMLAttributes<HTMLParagraphElement>;

export const Typography = ({
  variant = "primary",
  color = "black",
  children,
  ...rest
}: TypographyProps) => (
  <StyledP color={color} variant={variant} {...rest}>
    {children}
  </StyledP>
);

const StyledP = styled.span<{ variant: Variant; color: string }>`
  color: ${({ color }) => color};
`;
