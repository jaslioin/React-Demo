import styled, { css } from "styled-components";

export const FlexSection = styled.div<{
  justify?: string;
  align?: string;
  gap?: number;
  direction?: string;
  wrap?: string;
  rowGap?: number;
}>`
  display: flex;
  ${({ justify, align, gap, direction, wrap, rowGap }) => css`
    flex-direction: ${direction || "row"};
    justify-content: ${justify || "normal"};
    justify-items: ${justify || "normal"};
    align-items: ${align || "normal"};
    align-content: ${align || "normal"};
    gap: ${gap ? `${gap}px` : null};
    flex-wrap: ${wrap || "nowrap"};
    row-gap: ${rowGap ? `${rowGap}px` : null};
  `}
`;
