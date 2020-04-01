import React, { useRef, useEffect } from "react";
import { select, geoPath, geoMercator } from "d3";
import { propertyFieldMap } from "../../constants";
import "./Map.css";

export const Map = ({
  mapData,
  geoData,
  height,
  width,
  mapType,
  colorScale
}) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    const projection = geoMercator().fitSize([width, height], geoData);
    const pathGenerator = geoPath().projection(projection);

    svg
      .selectAll(".states")
      .data(geoData.features)
      .join("path")
      .attr("class", "states")
      .attr("d", feature => pathGenerator(feature))
      .attr("fill", feature => {
        const keyInGeoData = propertyFieldMap[mapType];
        const stateName = feature.properties[keyInGeoData];
        const selectedState =
          mapData && mapData.find(state => state.state === stateName);
        return colorScale
          ? colorScale(selectedState && selectedState.confirmed * 100)
          : undefined;
      });
  }, [geoData, mapData]);

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
