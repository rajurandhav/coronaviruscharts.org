import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import "./HelpCard.css";

export const HelpCard = ({ data }) => {
  return (
    <Card className="help-container" variant="outlined">
      <CardContent>
        <div className="help-name">
          <span>{data.nameoftheorganisation}</span>
        </div>
        <div className="help-details">
          <div className="field details-type">
            <span>Type: </span>
            <div className="help-value">{data.category}</div>
          </div>
          <div className="field details-contact">
            <span>Contact: </span>
            <div className="help-value">{data.phonenumber}</div>
          </div>
          <div className="field details-desc">
            <span>Description: </span>
            <div className="help-value">{data.descriptionandorserviceprovided}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
