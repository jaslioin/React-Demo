/* eslint-disable camelcase */
import { useInfiniteQuery, useQuery } from "react-query";
import { useSetState } from "react-use";
import { filter, isNil } from "ramda";
import styled from "styled-components";
import { useMemo } from "react";
import { catApi } from "@/services/catApi";
import { FlexSection } from "@/components/FlexSection";
import Card from "@/components/Card";
import notFound from "@/assets/cat-not-found.jpg";
import { FixedDiv } from "@/components/FixedDiv";

export default function CatExplorer() {
  const [filters, setFilters] = useSetState<{
    page: number;
    limit: number;
  }>({
    page: 0,
    limit: 10,
  });
  const {
    fetchNextPage,
    fetchPreviousPage,
    data: pagedCats,
    isFetching,
  } = useInfiniteQuery(
    ["cat-breeds"],
    ({ pageParam = 0 }) => {
      console.log("%c%s", "color: #e50000", pageParam);
      return catApi.searchBreeds({
        page: pageParam,
        limit: filters.limit,
      });
    },
    {
      keepPreviousData: true,
      onSuccess: (res) => {
        if (res.pages[filters.page].length === 0) {
          // alert("no more");
        }
      },
      onError: () => {
        console.log("%c%s", "color: #00bf00", "ERRR");
      },
    },
  );
  const { disableNext, disablePrev } = useMemo(() => {
    const prevPageLength = pagedCats?.pages?.[filters.page - 1]?.length;
    const thisPageLength = pagedCats?.pages?.[filters.page]?.length;
    console.log("%c⧭", "color: #0088cc", {
      prevPageLength,
      thisPageLength,
    });

    return {
      disableNext: thisPageLength === 0,
      disablePrev: filters.page === 0 || prevPageLength === 0,
    };
  }, [filters, pagedCats]);
  const currentCats = useMemo(
    () => pagedCats?.pages?.[filters.page] || [],
    [filters.page, pagedCats],
  );
  console.log("%c⧭", "color: #aa00ff", pagedCats);
  if (isFetching) {
    return <> </>;
  }
  return (
    <Container>
      <StyledFlexSection gap={8} justify="center" wrap="wrap">
        {currentCats.map((v) => (
          <Card key={v.id}>
            <FlexSection>
              <CatImage src={v?.image?.url || notFound} alt="cat pic" />
            </FlexSection>
          </Card>
        ))}
        {currentCats.length === 0 && <>No more cats..., come back later</>}
      </StyledFlexSection>
      <FixedDiv position="center-left">
        <button
          type="button"
          onClick={() => {
            fetchPreviousPage();
            setFilters((p) => ({
              ...p,
              page: p.page - 1,
            }));
          }}
          disabled={disablePrev}
        >
          Prev Page
        </button>
      </FixedDiv>

      <FixedDiv position="center-right">
        <button
          type="button"
          onClick={() => {
            fetchNextPage({
              pageParam: filters.page + 1,
            });
            setFilters((p) => ({
              ...p,
              page: p.page + 1,
            }));
          }}
          disabled={disableNext}
        >
          Next Page
        </button>
      </FixedDiv>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

const StyledFlexSection = styled(FlexSection)`
  width: 100vw;
  max-height: 100%;
  padding: 16px 4px;
  overflow-y: scroll;
`;
const CatImage = styled.img.attrs((p) => ({ ...p, width: 200 }))`
  object-fit: cover;
  height: 10rem;
  /* width:10vw; */
  border-radius: 15px;
`;
