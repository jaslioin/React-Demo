import styled, { css } from "styled-components";
import { FixedDiv } from "@/components/FixedDiv";
import { Z_INDEX } from "@/constants/zIndex";

type Props = {
  isLoading: boolean;
};
const LoadingPage: React.FC<Props> = ({ isLoading }) => (
  <StyledFixedDiv isDisplay={isLoading} position="center">
    Loading...
  </StyledFixedDiv>
);
const StyledFixedDiv = styled(FixedDiv)<{
  isDisplay: boolean;
}>`
  z-index: ${Z_INDEX.LOADING};
  background-color: ${({ theme }) => theme.colors.loadingBg};
  width: 100vw;
  height: 100vh;
  opacity: 1;
  visibility: visible;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: visibility 0.3s ease, opacity 0.3s ease;
  ${({ isDisplay }) => !isDisplay
    && css`
      opacity: 0;
      visibility: hidden;
    `}
`;
export default LoadingPage;
