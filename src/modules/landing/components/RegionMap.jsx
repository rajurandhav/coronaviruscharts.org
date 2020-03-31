import React from "react";
import { useStore } from "../../../contexts";
import { Map } from "../../common";
import { useEffect } from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import * as topojson from "topojson-client";
// import { AutoSizer } from "react-virtualized";
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

export const RegionMap = observer(({ stateWiseCount, districtWiseCount }) => {
  const {
    mapState: { viewObject },
    coronaTraker: { geoData, getTopoDataForRegion }
  } = useStore();

  useEffect(() => {
    getTopoDataForRegion(viewObject);
  }, [viewObject]);

  const corData = getGeoJSON(geoData, viewObject);

  return (
    <div className={"r-map-container"}>
      {corData && (
        <Map
          className={"r-map"}
          height={500}
          width={500}
          mapData={stateWiseCount}
          geoData={corData}
        ></Map>
      )}
    </div>
  );
});
