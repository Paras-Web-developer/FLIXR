import React from "react";
import "./style.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DeatilsBanner";
export default function details() {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  return (
    <>
      <DetailsBanner video={data?.results[0]} crew={credits?.crew} />
    </>
  );
}
