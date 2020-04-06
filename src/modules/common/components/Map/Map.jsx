import React, { useRef, useEffect } from "react";
import { select, geoPath, geoMercator, event } from "d3";
import "./Map.css";

export const Map = ({
  mapData,
  geoData,
  height,
  width,
  colorScale,
  onRegionClick,
  keyToPickFromGeoData
}) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    const projection = geoMercator().fitExtent([[0, 0], [width, height]], geoData);
    const pathGenerator = geoPath().projection(projection);

    svg
      .selectAll(".states")
      .data(geoData.features)
      .join("path")
      .attr("class", "states")
      .attr("d", feature => pathGenerator(feature))
      .attr("fill", feature => {
        const regionName = feature.properties[keyToPickFromGeoData];
        const regionData = mapData
          ? mapData.find(region => region.name === regionName)
          : [];
        return regionData && regionData.confirmed
          ? colorScale(parseInt(regionData.confirmed, 10))
          : "rgb(255,250,250)";
      })
      .on("click", feature => {
        if (!onRegionClick) return;
        const regionName = feature.properties[keyToPickFromGeoData];
        const regionData = mapData
        ? mapData.find(region => region.name === regionName)
        : [];
        onRegionClick(regionData, regionName);
      })
      .on("mouseover", d => {
        const target = event.target;
        select(target).attr("class", "map-hover");
      })
      .on("mouseleave", d => {
        const target = event.target;
        select(target).attr("class", "states");
      });
  }, [
    geoData,
    mapData,
    colorScale,
    height,
    width,
    keyToPickFromGeoData,
    onRegionClick
  ]);

  return (
    <div className="map-container">
      <svg
        id="chart"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        ref={svgRef}
      ></svg>
    </div>
  );
};
