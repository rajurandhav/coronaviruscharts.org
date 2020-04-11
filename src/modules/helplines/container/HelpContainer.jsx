import React from "react";
import { observer } from "mobx-react";
import { useStore } from "../../../contexts";
import { HelpCard, HelpSearch } from "../components";
import "./HelpContainer.css";

export const HelpContainer = observer(() => {
  const {
    helpLine: { getHelpLineData, helpLineFilter, selectedData },
  } = useStore();

  React.useEffect(() => {
    getHelpLineData();
  }, [getHelpLineData]);

  return (
    <div className="help-line-container">
      <HelpSearch filters={helpLineFilter}></HelpSearch>
      <div className="card-pane">
        {selectedData &&
          selectedData.map((data) => {
            return <HelpCard data={data}></HelpCard>;
          })}
      </div>
    </div>
  );
});
