import React from "react";
import { useStore } from "../../../contexts";
import { Map } from "../../common";
import { min, max, scaleLinear } from "d3";
import { useEffect } from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import * as topojson from "topojson-client";
import memoizeOne from "memoize-one";
import "./RegionMap.css";

const getGeoJSON = memoizeOne((geoData, viewObject) => {
  return geoData
    ? topojson.feature(
        geoData,
        toJS(geoData.objects[viewObject.graphObjectName])
      )
    : null;
});

const getGeoColorScale = memoizeOne(stateWiseCount => {
  if (stateWiseCount && stateWiseCount.length) {
    const minProp = min(stateWiseCount, state => state["confirmed"] * 20);
    const maxProp = max(stateWiseCount, state => state["confirmed"] * 20);
    return scaleLinear()
      .domain([minProp, maxProp])
      .range(["#ccc", "red"]);
  } else {
    return null;
  }
});

export const RegionMap = observer(({ stateWiseCount, districtWiseCount }) => {
  const {
    mapState: { viewObject },
    coronaTraker: { geoData, getTopoDataForRegion }
  } = useStore();

  useEffect(() => {
    getTopoDataForRegion(viewObject);
  }, [viewObject]);

  const corData = getGeoJSON(geoData, viewObject);
  const colorScale = getGeoColorScale(stateWiseCount);

  return (
    <div className={"r-map-container"}>
      {corData && (
        <Map
          mapType={viewObject.mapType}
          colorScale={colorScale}
          className={"r-map"}
          height={500}
          width={500}
          mapData={toJS(stateWiseCount)}
          geoData={corData}
        ></Map>
      )}
    </div>
  );
});
