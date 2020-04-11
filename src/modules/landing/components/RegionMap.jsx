import React from "react";
import { useStore } from "../../../contexts";
import { Map, CounterStrip } from "../../common";
import { geoMap, STRIPHEIGHT, MAPCONTAINERPADDING } from "../../common/constants";
import { min, max, scaleLinear } from "d3";
import { useEffect } from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import * as topojson from "topojson-client";
import memoizeOne from "memoize-one";
import { AutoSizer } from "react-virtualized";
import { getStatObject } from "../../services";
import { useTranslation } from 'react-i18next'
import "./RegionMap.css";

const getGeoJSON = memoizeOne(
  (geoData, viewObject) => {
    return geoData && viewObject && geoData.objects[viewObject.graphObjectName]
      ? topojson.feature(
          geoData,
          toJS(geoData.objects[viewObject.graphObjectName])
        )
      : null;
  },
  (oldProp, newProp) =>
    oldProp[1].name === newProp[1].name && oldProp[0] === newProp[0]
);

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
        viewObject,
        setStateView,
        setDistrictView,
        setCountryView,
        regionData
      },
      coronaTracker: { geoData, getTopoDataForRegion }
    } = useStore();

    // Effect to fetch topoJSON data
    useEffect(() => {
      if (view) {
        getTopoDataForRegion(viewObject);
      }
    }, [view, viewObject, getTopoDataForRegion]);
    const { t } = useTranslation();
    // Converting top JSON to GEO json
    const corData = getGeoJSON(geoData, viewObject);
    const colorScale = getGeoColorScale(
      isCountryView(view) ? stateWiseCount : districtWiseCount[geoRegion]
    );

    return (
      <>
        <CounterStrip
          regionName={t("India")}
          backNavigator={true}
          data={getStatObject({
            active: indiaCount?.active ?? 0,
            recovered: indiaCount?.recovered ?? 0,
            confirmed: indiaCount?.confirmed ?? 0,
            deltaconfirmed: indiaCount?.deltaconfirmed ?? 0,
            deaths: indiaCount?.deaths ?? 0,
            totalHospitals: indiaCount?.totalHospitals ?? 0,
            totalBeds: indiaCount?.totalBeds ?? 0,
            region: "India"
          })}
          onClickHandler={setCountryView}
        ></CounterStrip>
        {regionData &&
          regionData.map(item => {
            return (
              <CounterStrip
                key={item ? item.displayName : district}
                regionName={item ? item.displayName : district}
                data={getStatObject({
                  active: item?.active ?? 0,
                  recovered: item?.recovered ?? 0,
                  confirmed: item?.confirmed ?? 0,
                  deltaconfirmed: item?.deltaconfirmed ?? 0,
                  deaths: item?.deaths ?? 0,
                  totalHospitals: item?.totalHospitals ?? 0,
                  totalBeds: item?.totalBeds ?? 0,
                  region: item ? item.displayName : district
                })}
              ></CounterStrip>
            );
          })}
        <AutoSizer>
          {({ height, width }) => {
            const correctedHeight =
              height - (STRIPHEIGHT + regionData.length * STRIPHEIGHT + MAPCONTAINERPADDING);
            const correctedWidth = width - MAPCONTAINERPADDING;
            return (
              corData && (
                <div
                  className="rgn-map-container"
                  style={{ width: correctedWidth, height: correctedHeight }}
                >
                  <Map
                    onRegionClick={
                      isCountryView(view) ? setStateView : setDistrictView
                    }
                    colorScale={colorScale}
                    className={"r-map"}
                    keyToPickFromGeoData={geoMap[view].key}
                    height={correctedHeight}
                    width={correctedWidth}
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
