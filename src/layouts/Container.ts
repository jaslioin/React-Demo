import styled from "styled-components";
import { FlexSection } from "./FlexSection";

export const Container = styled(FlexSection).attrs((p) => ({
	...p,
}))`
	height: 100vh;
`;
