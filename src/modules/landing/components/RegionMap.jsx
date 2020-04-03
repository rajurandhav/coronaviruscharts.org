import React from "react";
import { useStore } from "../../../contexts";
import { Map, CounterStrip } from "../../common";
import { min, max, scaleLinear } from "d3";
import { useEffect } from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import * as topojson from "topojson-client";
import memoizeOne from "memoize-one";
import { AutoSizer } from "react-virtualized";
import "./RegionMap.css";

const getGeoJSON = memoizeOne((geoData, viewObject) => {
  return geoData && viewObject && geoData.objects[viewObject.graphObjectName]
    ? topojson.feature(
        geoData,
        toJS(geoData.objects[viewObject.graphObjectName])
      )
    : null;
});

const isCountryView = regionName => {
  return regionName === "country";
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

export const RegionMap = observer(
  ({ stateWiseCount, districtWiseCount, indiaCount }) => {
    const {
      mapState: {
        view,
        geoRegion,
        district,
        geoDataKey,
        viewObject,
        setStateView,
        setDistrictView,
        setCountryView,
        regionData
      },
      coronaTraker: { geoData, getTopoDataForRegion }
    } = useStore();

    useEffect(() => {
      if (geoDataKey) {
        getTopoDataForRegion(viewObject);
      }
    }, [geoDataKey, getTopoDataForRegion]);

    const corData = getGeoJSON(geoData, viewObject);
    const colorScale = getGeoColorScale(
      isCountryView(view) ? stateWiseCount : districtWiseCount[geoRegion]
    );

    return (
      <>
        <CounterStrip
          regionName={"India"}
          recovered={indiaCount.recovered}
          active={indiaCount.active}
          died={indiaCount.deaths}
          onClickHandler={setCountryView}
        ></CounterStrip>
        {regionData &&
          regionData.map(item => {
            return (
              <CounterStrip
                key={item ? item.displayName : district}
                regionName={item ? item.displayName : district}
                recovered={item?.recovered??0}
                active={item?.active??0}
                died={item?.deaths??0}
              ></CounterStrip>
            );
          })}
        <AutoSizer>
          {({ height, width }) => {
            return (
              corData && (
                <div style={{ width, height }}>
                  <Map
                    onRegionClick={isCountryView(view) ? setStateView : setDistrictView}
                    colorScale={colorScale}
                    className={"r-map"}
                    keyToPickFromGeoData={geoDataKey}
                    height={isCountryView(view) ? 500 : 500}
                    width={isCountryView(view) ? width : width - 50}
                    mapData={
                      isCountryView(view)
                        ? toJS(stateWiseCount)
                        : toJS(districtWiseCount[geoRegion])
                    }
                    geoData={corData}
                  ></Map>
                </div>
              )
            );
          }}
        </AutoSizer>
      </>
    );
  }
);
