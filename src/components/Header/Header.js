import React from "react";
import { StyledHeader } from "./Header.styles";
import { H1 } from "../../styles/textStyles";
import Button from "../Button/Button";

const Header = () => {
  return (
    <StyledHeader>
      <H1>Birthday Reminders</H1>
      <Button text="Add +" onClick={() => {}} />
    </StyledHeader>
  );
};

export default Header;
