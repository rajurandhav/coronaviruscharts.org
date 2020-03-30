import React, { useRef, useEffect, useState } from "react";
import { select } from "d3";

export const Map = () => {
  const [data, setData] = useState([25, 30, 45, 60, 20]);
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    svg
      .selectAll("circle")
      .data(data)
      .join(
        enter => enter.append("circle"),
        update => update.attr("class", "updates"),
        exit => exit.remove()
      )
      .attr("r", value => value)
      .attr("cx", value => value * 2)
      .attr("cy", value => value * 2)
      .attr("stroke", "red");
  }, [data]);

  return (
    <>
      <button onClick={() => setData(data.map(item => item + 5))}>
        Update
      </button>
      <button onClick={() => setData(data.filter(item => item <= 30))}>
        Filter
      </button>
      <svg ref={svgRef}></svg>
    </>
  );
};
