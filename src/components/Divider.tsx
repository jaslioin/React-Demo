import styled, { css } from "styled-components";

export const Divider = styled.div<{
  direction?: "vertical" | "horizontal";
}>`
  background: #d1d1d1;
  ${({ direction }) => {
    switch (direction) {
      case "horizontal":
        return css`
          height: 1px;
          width: 100%;
        `;
      case "vertical":
      default:
        return css`
          width: 1px;
          height: 100%;
        `;
    }
  }}
`;
