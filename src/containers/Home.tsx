import styled from "styled-components";
import { Link } from "react-router-dom";
import { Path } from "@/constants/paths";
import { Button } from "@/components/Button";
import { FlexSection } from "@/components/FlexSection";

export default function Home() {
  return (
    <div>
      <Title>Cat Explorer</Title>
      <StyledSection justify="center" align="center">
        <StyledLink to={Path.CAT_EXPLORER}>
          <StyledButton>
            Start!
          </StyledButton>
        </StyledLink>
      </StyledSection>
    </div>
  );
}

const Title = styled.h1`
  text-align: center;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  &:visited {
    color: inherit;
  }
`;
const StyledButton = styled(Button)`
  width:6rem;
  height:4rem;
`;
const StyledSection = styled(FlexSection)`
  height:100%;
`;
