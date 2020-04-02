import React, { useRef, useEffect } from "react";
import { select, geoPath, geoMercator, event } from "d3";
import { propertyFieldMap } from "../../constants";
import "./Map.css";

export const Map = ({
  mapData,
  geoData,
  height,
  width,
  mapType,
  colorScale,
  onRegionClick,
  view
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
        const regionName = feature.properties[keyInGeoData];
        const regionData = mapData
          ? mapData.find(region => region.name === regionName)
          : [];
        return regionData && regionData.confirmed
          ? colorScale(parseInt(regionData.confirmed, 10))
          : "rgb(255,250,250)";
      })
      .on("click", feature => {
        const keyInGeoData = propertyFieldMap[mapType];
        const regionName = feature.properties[keyInGeoData];
        onRegionClick(regionName);
      })
      .on("mouseover", d => {
        const target = event.target;
        console.log(target);
        select(target).attr("class", "map-hover");
      })
      .on("mouseleave", d => {
        const target = event.target;
        select(target).attr("class", "states");
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
