import React, { useRef, useEffect } from "react";
import { select, geoPath, geoMercator } from "d3";
import { toJS } from "mobx";
import "./Map.css";

export const Map = ({ mapData, geoData, height, width }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    const projection = geoMercator().fitSize([width, height], geoData);
    const pathGenerator = geoPath().projection(projection);
    console.log(geoData.features);
    svg
      .selectAll(".states")
      .data(geoData.features)
      .join("path")
      .attr("class", "states")
      .attr("d", feature => pathGenerator(feature));
  }, [geoData]);

  return (
    <div>
      <svg
        id="chart"
        width={width}
        height={height}
        viewBox="0 0 500 500"
        preserveAspectRatio="xMidYMid meet"
        ref={svgRef}
      ></svg>
    </div>
  );
};
