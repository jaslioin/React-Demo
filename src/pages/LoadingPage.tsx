import styled from "styled-components";
import { Transition } from "react-transition-group";
import { CSSProperties } from "react";
import { FixedDiv } from "@/components/FixedDiv";
import { Z_INDEX } from "@/constants/zIndex";
import { useLoading } from "@/hooks/useLoading";

const defaultStyle: CSSProperties = {
  transition: `opacity ${400}ms ease-in-out`,
  opacity: 0,
  visibility: "visible",
};

const transitionStyles = {
  entering: { opacity: 1, visibility: "visible" },
  entered: { opacity: 1, visibility: "visible" },
  exiting: { opacity: 0, visibility: "visible" },
  exited: { opacity: 0, visibility: "hidden" },
};
const LoadingPage: React.FC = ({ children }) => {
  const { isLoading } = useLoading();

  return (
    <Transition in={isLoading} timeout={400} appear>
      {(state) => (
        <StyledFixedDiv
          position="full-page"
          style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
        >
          Loading...
        </StyledFixedDiv>
    )}
    </Transition>
);
};
const StyledFixedDiv = styled(FixedDiv)`
  z-index: ${Z_INDEX.LOADING};
  background-color: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  top:0;
`;
export default LoadingPage;
