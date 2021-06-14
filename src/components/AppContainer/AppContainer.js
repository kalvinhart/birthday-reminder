import React from "react";
import { StyledAppContainer } from "./AppContainer.styles";

const AppContainer = ({ children }) => {
  return <StyledAppContainer>{children}</StyledAppContainer>;
};

export default AppContainer;
