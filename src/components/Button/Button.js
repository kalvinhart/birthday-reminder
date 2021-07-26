import React from "react";
import PropTypes from "prop-types";

import { StyledButton } from "./Button.styles";

const Button = ({ type, text, click, icon }) => {
  return (
    <StyledButton type={type} onClick={click} icon={icon}>
      {!!text && text}
      {!!icon && icon}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.element,
  onClick: PropTypes.func,
};

export default Button;
