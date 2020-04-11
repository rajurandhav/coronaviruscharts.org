import React from "react";
import { useStore } from "../../../contexts";
import { observer } from "mobx-react";
import { RegionMap } from "../components/RegionMap";
import { useEffect } from "react";
import { getProcessedStateStats } from "../../services";
import "./Landing.css";

export const Landing = observer(() => {
  const {
    coronaTracker: {
      getStateWiseCount,
      getDistrictWiseCount,
      getBedCounts,
      stateWiseCount,
      bedCounts,
      districtWiseCount
    }
  } = useStore();

  useEffect(() => {
    getStateWiseCount();
    getDistrictWiseCount();
    getBedCounts();
  }, [getStateWiseCount, getDistrictWiseCount, getBedCounts]);

  const stateWiseCountStat = getProcessedStateStats(stateWiseCount, bedCounts);
  return (
    <div className="landingContainer">
      <div>
        <RegionMap
          indiaCount={stateWiseCountStat ? stateWiseCountStat[0] : {}}
          stateWiseCount={
            stateWiseCountStat && stateWiseCountStat.slice(1, stateWiseCountStat.length)
          }
          districtWiseCount={districtWiseCount}
        ></RegionMap>
      </div>
    </div>
  );
});
