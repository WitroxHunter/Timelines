import React from "react";
import "../../../timelines-app.css";
import SettingsIcon from "../../../../assets/icons/settings-2.svg"

export const SettingsWidget = () => {
  return (
<div className="settings-widget">
    <img src={SettingsIcon} className="settings-icon"></img>
</div>
  );
};
