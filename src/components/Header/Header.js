import React from "react";
import PropTypes from "prop-types";
import { StyledHeader } from "./Header.styles";
import { H1 } from "../../styles/textStyles";
import Button from "../Button/Button";

const Header = ({ showAdd, setShowAdd }) => {
  const handleClick = () => {
    setShowAdd(!showAdd);
  };
  return (
    <StyledHeader>
      <H1>Birthday Reminders</H1>
      <Button text={showAdd ? "Cancel" : "Add +"} click={handleClick} />
    </StyledHeader>
  );
};

Header.propTypes = {
  showAdd: PropTypes.bool.isRequired,
  setShowAdd: PropTypes.func.isRequired,
};

export default Header;
