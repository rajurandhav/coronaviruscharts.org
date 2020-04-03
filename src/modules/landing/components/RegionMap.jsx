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
import { propertyFieldMap } from "../../common/constants";

const getGeoJSON = memoizeOne((geoData, viewObject) => {
  return geoData && viewObject && geoData.objects[viewObject.graphObjectName]
    ? topojson.feature(
        geoData,
        toJS(geoData.objects[viewObject.graphObjectName])
      )
    : null;
});

const isStateView = (regionName) => {
  return regionName === "India";
};

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
  const viewConf = propertyFieldMap[view]
  const colorScale = getGeoColorScale(
    isStateView(regionName) ? stateWiseCount : districtWiseCount[regionName]
  );

  return (
    <div className={"r-map-container"}>
      {corData && (
        <Map
          onRegionClick={isStateView(regionName) && setView}
          colorScale={colorScale}
          className={"r-map"}
          keyToPickFromGeoData={viewConf.keyToGeoData}
          height={viewConf.height}
          width={viewConf.width}
          mapData={
            isStateView(regionName)
              ? toJS(stateWiseCount)
              : toJS(districtWiseCount[regionName])
          }
          geoData={corData}
        ></Map>
      )}
    </div>
  );
});
