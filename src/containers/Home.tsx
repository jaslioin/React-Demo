import styled from "styled-components";
import { Link } from "react-router-dom";
import { Path } from "@/constants/paths";
import { Container } from "@/layouts/Container";

export default function Home() {
  return (
    <Container justify="center" align="center" direction="column">
      <CatLogo>🐱</CatLogo>
      <Title>Cat Explorer</Title>
      <StyledLink to={Path.CAT_EXPLORER}>
        <StyledButton type="button">Start!</StyledButton>
      </StyledLink>
    </Container>
  );
}
const CatLogo = styled.div`
  font-size: 7rem;
`;
const Title = styled.h1`
  text-align: center;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  &:visited {
    color: inherit;
  }
`;
const StyledButton = styled.button`
  width: 6rem;
  height: 4rem;
`;
