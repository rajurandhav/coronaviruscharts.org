import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from '@material-ui/core/FormControl';
import "./HelpSearch.css";

export const HelpSearch = ({ filters }) => {
  return (
    <div className="help-search">
      {filters.map((filter) => {
        return (
          <FormControl key={filter.key} className="filter">
            <InputLabel id={`demo-simple-select-label-${filter.key}`}>
              {`${filter.label}`}
            </InputLabel>
            <Select
              labelId={`demo-simple-select-label-${filter.key}`}
              id="demo-simple-select"
              value={filter.value}
              onChange={filter.onSelect}
            >
              {filter.list.map((item) => {
                return (
                  <MenuItem key={`menu-${filter.key}-${item}`} value={item}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        );
      })}
    </div>
  );
};
