/* eslint-disable camelcase */
import styled from "styled-components";
import { FlexSection } from "@/components/FlexSection";
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
    <CatImage src={image?.url} width={300} alt={description} />
    <FlexSection justify="center" direction="column" rowGap={8}>
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
        <span>{description}</span>
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
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

const CatImage = styled.img`
  object-fit: cover;
  border-radius: 15px;
  flex-basis: 40%;
`;

const EntrySection = styled(FlexSection).attrs((p) => ({
  ...p,
  gap: 8,
  justify: "space-between",
}))``;
