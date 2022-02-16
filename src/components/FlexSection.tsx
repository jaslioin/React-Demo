import styled, { css } from "styled-components";

export const FlexSection = styled.div<{
  justify?: string;
  align?: string;
  gap?: number;
}>`
  display: flex;
  ${({ justify, align, gap }) => css`
    justify-content: ${justify || "normal"};
    justify-items: ${justify || "normal"};
    align-items: ${align || "normal"};
    align-content: ${align || "normal"};
    gap: ${`${gap}px` || null};
  `}
`;
export const LeftSection = styled(FlexSection).attrs((p) => ({
  ...p,
  justify: "flex-start",
}))({});

export const RightSection = styled(FlexSection).attrs((p) => ({
  ...p,
  justify: "flex-end",
}))``;
