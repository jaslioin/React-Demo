import {
  Dispatch,
  SetStateAction,
  forwardRef,
  useImperativeHandle,
  useState,
  ReactNode,
  RefObject,
  useRef,
} from "react";
import { useClickAway } from "react-use";
import styled, { css } from "styled-components";
import { Z_INDEX } from "../constants/zIndex";

type Props = {
  children?: ReactNode;
};
export type ModalRefObject = {
  toggleOpen: Dispatch<SetStateAction<boolean>>;
};
const ModalComp = (
  { children, ...props }: Props,
  ref: RefObject<ModalRefObject>,
) => {
  const [isOpen, toggleOpen] = useState(false);
  const containerRef = useRef();
  useImperativeHandle(
    ref,
    () => ({
      toggleOpen,
    }),
    [toggleOpen],
  );
  useClickAway(containerRef, () => {
    toggleOpen(false);
  });
  return (
    <ModalMask isDisplay={isOpen} {...props}>
      <ModalContainer ref={containerRef} className="modal-container">
        {children}
      </ModalContainer>
    </ModalMask>
  );
};

const ModalMask = styled.div<{ isDisplay: boolean }>`
  z-index: ${Z_INDEX.MODAL};
  opacity: 1;
  visibility: visible;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  transition: visibility 0.3s ease, opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  ${({ isDisplay }) => !isDisplay
    && css`
      opacity: 0;
      visibility: hidden;
    `}
`;

const ModalContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  box-sizing: border-box;
  margin: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Modal = forwardRef<ModalRefObject, Props>(ModalComp);
