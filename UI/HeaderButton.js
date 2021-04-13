import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { HeaderButton } from "react-navigation-header-buttons";

const IconHeaderButton = (props) => (
  <HeaderButton IconComponent={AntDesign} iconSize={24} {...props} />
);

export default IconHeaderButton;
