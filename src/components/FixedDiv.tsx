import styled, { css } from "styled-components";
import { Z_INDEX } from "@/constants/zIndex";

type Position =
  | "top"
  | "center"
  | "bottom"
  | "top-left"
  | "top-right"
  | "center-left"
  | "center-right"
  | "center-top"
  | "full-page";
export const FixedDiv = styled.div<{ position: Position }>`
  position: fixed;
  z-index: ${Z_INDEX.FIXED};
  ${({ position }) => {
    switch (position) {
      case "top":
        return css`
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        `;
      case "top-left":
        return css`
          top: 0;
          left: 0;
        `;
      case "top-right":
        return css`
          top: 0;
          right: 0;
        `;
      case "center-left":
        return css`
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        `;
      case "center-right":
        return css`
          top: 50%;
          right: 0;
          transform: translateY(-50%);
        `;
      case "center-top":
        return css`
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        `;
      case "center":
        return css`
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `;
      case "bottom":
        return css`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        `;
      case "full-page":
      default:
        return css`
          width: 100vw;
          height: 100vh;
          display: flex;
        `;
    }
  }}
`;
