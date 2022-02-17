/* eslint-disable camelcase */
import styled from "styled-components";
import notFound from "@/assets/cat-not-found.jpg";
import { FlexSection } from "@/layouts/FlexSection";
import { Breed } from "@/types/cat";

type Props = Partial<Breed>;
export const CatDetail: React.FC<Props> = ({
  name,
  origin,
  life_span,
  wikipedia_url,
  image,
  description,
}) => (
  <StyledFlexSection justify="center" direction="row" gap={16}>
    <CatImage src={image?.url || notFound} width={300} alt={description} />
    <FlexSection justify="flex-start" direction="column" rowGap={8}>
      <EntrySection>
        <span>Life Span</span>
        <span>{life_span}</span>
      </EntrySection>
      <EntrySection>
        <span>Origin</span>
        <span>{origin}</span>
      </EntrySection>
      <EntrySection>
        <span>Name</span>
        <span>{name}</span>
      </EntrySection>
      <EntrySection>
        <p>{description}</p>
      </EntrySection>
      <FlexSection justify="flex-end">
        <a href={wikipedia_url}>...More</a>
      </FlexSection>
    </FlexSection>
  </StyledFlexSection>
);

const StyledFlexSection = styled(FlexSection)`
  padding: 16px;
  overflow: scroll;
  max-height: 80vh;
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

const CatImage = styled.img`
  object-fit: contain;
  flex-basis: 40%;
  flex-grow: 0;
`;

const EntrySection = styled(FlexSection).attrs((p) => ({
  ...p,
  gap: 8,
  justify: "space-between",
}))``;
