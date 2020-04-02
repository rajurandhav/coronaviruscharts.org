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
  return geoData && viewObject && geoData.objects[viewObject.graphObjectName]
    ? topojson.feature(
        geoData,
        toJS(geoData.objects[viewObject.graphObjectName])
      )
    : null;
});

const getGeoColorScale = memoizeOne(data => {
  if (data && data.length) {
    const minProp = min(data, state => parseInt(state.confirmed, 10));
    const maxProp = max(data, state => parseInt(state.confirmed, 10));
    return scaleLinear()
      .domain([minProp, maxProp])
      .range(["rgb(255,250,250)", "#FF0000"]);
  } else {
    return null;
  }
});

export const RegionMap = observer(({ stateWiseCount, districtWiseCount }) => {
  const {
    mapState: { view, regionName, viewObject, setView },
    coronaTraker: { geoData, getTopoDataForRegion }
  } = useStore();

  useEffect(() => {
    if (viewObject) {
      getTopoDataForRegion(viewObject);
    }
  }, [viewObject]);

  const corData = getGeoJSON(geoData, viewObject);
  const colorScale = getGeoColorScale(
    regionName === "India" ? stateWiseCount : districtWiseCount[regionName]
  );

  return (
    <div className={"r-map-container"}>
      {corData && (
        <Map
          mapType={viewObject.mapType}
          onRegionClick={setView}
          colorScale={colorScale}
          className={"r-map"}
          view={view}
          height={500}
          width={500}
          mapData={
            regionName === "India"
              ? toJS(stateWiseCount)
              : toJS(districtWiseCount[regionName])
          }
          geoData={corData}
        ></Map>
      )}
    </div>
  );
});
