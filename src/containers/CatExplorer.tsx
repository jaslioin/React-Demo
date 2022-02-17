/* eslint-disable camelcase */
import { useInfiniteQuery } from "react-query";
import { useSetState } from "react-use";
import styled from "styled-components";
import { useMemo, useRef, useState } from "react";
import { catApi } from "@/services/catApi";
import { FlexSection } from "@/layouts/FlexSection";
import Card from "@/components/Card";
import notFound from "@/assets/cat-not-found.jpg";
import { FixedDiv } from "@/layouts/FixedDiv";
import { Modal, ModalRefObject } from "@/components/Modal";
import { CatDetail } from "@/pages/CatDetail";
import { Breed } from "@/types/cat";
import LoadingPage from "@/pages/LoadingPage";
import { Button } from "@/components/Button";
import { Container } from "@/layouts/Container";

export default function CatExplorer() {
  const modalRef = useRef<ModalRefObject>();
  const [selectedCatDetail, setSelectedDetail] = useState<Breed>();
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
    isError,
  } = useInfiniteQuery(
    ["cat-breeds"],
    ({ pageParam = 0 }) => catApi.searchBreeds({
        page: pageParam,
        limit: filters.limit,
      }),
    {
      keepPreviousData: true,
    },
  );
  const { disableNext, disablePrev } = useMemo(() => {
    const prevPageLength = pagedCats?.pages?.[filters.page - 1]?.length;
    const thisPageLength = pagedCats?.pages?.[filters.page]?.length;

    return {
      disableNext: thisPageLength === 0,
      disablePrev: filters.page === 0 || prevPageLength === 0,
    };
  }, [filters, pagedCats]);
  const currentCats = useMemo(
    () => pagedCats?.pages?.[filters.page] || [],
    [filters.page, pagedCats],
  );
  const handleCardClick = (breed: Breed) => {
    modalRef.current.toggleOpen(true);
    setSelectedDetail(breed);
  };

  return (
    <Container align="center">
      {!isFetching && (
        <StyledFlexSection gap={16} justify="center" wrap="wrap">
          {isError && <>Something went wrong, please try again...</>}
          {!isError
            && currentCats.map((v) => (
              <Button
                key={v.id}
                onClick={() => handleCardClick(v)}
                type="button"
              >
                <AnimatedCard>
                  <FlexSection>
                    <CatImage
                      src={v?.image?.url || notFound}
                      alt="cat pic"
                      data-id={v.id}
                    />
                  </FlexSection>
                </AnimatedCard>
              </Button>
            ))}
          {!isError && currentCats.length === 0 && (
            <>No more cats..., come back later</>
          )}
        </StyledFlexSection>
      )}

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
      <CatDetailModal ref={modalRef}>
        <CatDetail {...selectedCatDetail} />
      </CatDetailModal>
      <LoadingPage isLoading={isFetching} />
    </Container>
  );
}

const StyledFlexSection = styled(FlexSection)`
  width: 100vw;
  max-height: 100%;
  padding: 16px 4px;
  overflow-y: scroll;
`;
const CatImage = styled.img.attrs((p) => ({ ...p, width: 200 }))`
  object-fit: cover;
  height: 10rem;
  border-radius: 15px;
  cursor: pointer;
`;
const CatDetailModal = styled(Modal)`
  .modal-container {
    max-width: max(420px, 60vw);
  }
`;

const AnimatedCard = styled(Card)`
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
