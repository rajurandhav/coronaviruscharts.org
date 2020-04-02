import React from "react";
import { useStore } from "../../../contexts";
import { observer } from "mobx-react";
import { RegionMap } from "../components/RegionMap";
import { useEffect } from "react";

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
  }, []);

  return (
    <RegionMap
      stateWiseCount={
        stateWiseCount && stateWiseCount.slice(1, stateWiseCount.length)
      }
      districtWiseCount={districtWiseCount}
    ></RegionMap>
  );
});
