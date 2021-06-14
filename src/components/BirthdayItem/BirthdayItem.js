import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyledItemWrapper, TextWrapper, ButtonWrapper } from "./BirthdayItem.styles";
import { H2, SpanBirthday } from "../../styles/textStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";

const BirthdayItem = ({ id, name, birthday, deleteItem }) => {
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
        <Button
          icon={<FontAwesomeIcon icon={faTrashAlt} />}
          onClick={() => deleteItem(id)}
        />
      </ButtonWrapper>
    </StyledItemWrapper>
  );
};

BirthdayItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default BirthdayItem;
