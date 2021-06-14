import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyledItemWrapper, TextWrapper, ButtonWrapper } from "./BirthdayItem.styles";
import { H2, SpanBirthday } from "../../styles/textStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";

const BirthdayItem = ({ name, birthday }) => {
  const [editing, setEditing] = useState(false);

  return (
    <StyledItemWrapper>
      <TextWrapper>
        <H2>{name}</H2>
        <SpanBirthday>{birthday}</SpanBirthday>
      </TextWrapper>
      <ButtonWrapper>
        <Button
          icon={<FontAwesomeIcon icon={faEdit} />}
          onClick={() => setEditing(!editing)}
        />
        <Button icon={<FontAwesomeIcon icon={faTrashAlt} />} />
      </ButtonWrapper>
    </StyledItemWrapper>
  );
};

BirthdayItem.propTypes = {
  name: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
};

export default BirthdayItem;
