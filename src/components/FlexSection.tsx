import styled, { css } from "styled-components";

export const FlexSection = styled.div<{
  justify?: string;
  align?: string;
  gap?: number;
  direction?: string;
  wrap?: string;
}>`
  display: flex;
  ${({ justify, align, gap, direction, wrap }) => css`
    flex-direction: ${direction || "row"};
    justify-content: ${justify || "normal"};
    justify-items: ${justify || "normal"};
    align-items: ${align || "normal"};
    align-content: ${align || "normal"};
    gap: ${`${gap}px` || null};
    flex-wrap: ${wrap || "nowrap"};
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
