import React from "react";
import { useStore } from "../../../contexts";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import { RegionMap } from "../components/RegionMap";
import { useEffect } from "react";
import "./Landing.css";

export const Landing = observer(() => {
  const {
    coronaTraker: {
      getStateWiseCount,
      getDistrictWiseCount,
      stateWiseCount,
      districtWiseCount
    }
  } = useStore();

  useEffect(() => {
    getStateWiseCount();
    getDistrictWiseCount();
  }, [getStateWiseCount, getDistrictWiseCount]);

  return (
    <div className="landingContainer">
      <div>
        <RegionMap
          indiaCount={stateWiseCount ? toJS(stateWiseCount[0]) : {}}
          stateWiseCount={
            stateWiseCount && stateWiseCount.slice(1, stateWiseCount.length)
          }
          districtWiseCount={districtWiseCount}
        ></RegionMap>
      </div>
    </div>
  );
});
