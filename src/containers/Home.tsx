/* eslint-disable camelcase */
import { useInfiniteQuery, useQuery } from "react-query";
import { useSetState } from "react-use";
import { filter, isNil } from "ramda";
import styled from "styled-components";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { catApi } from "@/services/catApi";
import { FlexSection } from "@/components/FlexSection";
import Card from "@/components/Card";
import notFound from "@/assets/cat-not-found.jpg";
import { FixedDiv } from "@/components/FixedDiv";
import { Path } from "@/constants/paths";

export default function Home() {
  return (
    <div>
      <Title>Cat Explorer</Title>
      <Link to={Path.CAT_EXPLORER}>Start!</Link>
    </div>
  );
}

const Title = styled.h1`
  text-align: center;
`;
