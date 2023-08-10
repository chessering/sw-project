import React from "react";
import Content from "./Content";
import "./Navigation.css";
import NavigatePhotos from "./NavigatePhotos";

function Navigation() {
  return (
    <div className="Navigation">
      <NavigatePhotos />
      <Content />
    </div>
  );
}

export default Navigation;
