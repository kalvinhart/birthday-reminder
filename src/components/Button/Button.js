import React from "react";
import PropTypes from "prop-types";

import { StyledButton } from "./Button.styles";

const Button = ({ text, onClick, icon }) => {
  return (
    <StyledButton onClick={onClick} alt={!!text ? text : ""} icon={icon}>
      {!!text && text}
      {!!icon && icon}
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.element,
  onClick: PropTypes.func,
};

export default Button;
