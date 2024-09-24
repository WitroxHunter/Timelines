import React from "react";
import "../../../timelines-app.css";
import SettingsIcon from "../../../../assets/icons/settings-2.svg";
import SearchIcon from "../../../../assets/icons/search.svg";
import { SearchWidget } from "./widgetSearch";

export const SettingsWidget = () => {
  return (
    <div className="settings-widget-box">
      <SearchWidget />
      {/* <div className="settings-widget">
        <img src={SearchIcon} className="settings-icon"></img>
      </div> */}
      <div className="settings-widget">
        <img src={SettingsIcon} className="settings-icon"></img>
      </div>
    </div>
  );
};
