import React from "react";
import PropTypes from "prop-types";

import { StyledButton } from "./Button.styles";

const Button = ({ text, click, icon }) => {
  console.log(click);
  return (
    <StyledButton onClick={click} icon={icon}>
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
