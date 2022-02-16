import { HTMLAttributes } from "react";
import styled from "styled-components";
import { defaultTheme } from "@/styles/theme";

type Variant = "primary";
export type TypographyProps = {
  variant?: Variant;
  color?: string;
} & HTMLAttributes<HTMLParagraphElement>;

export const Typography = ({
  variant = "primary",
  color = defaultTheme.colors.textDarker,
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
