import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyledItemWrapper, TextWrapper, ButtonWrapper } from "./BirthdayItem.styles";
import { H2, SpanBirthday } from "../../styles/textStyles";
import { StyledForm, StyledInput } from "../../styles/formStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";

const BirthdayItem = ({ id, name, birthday, deleteItem }) => {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData) return;
  };

  const editClickHandler = () => {
    setEditing(true);
  };

  const cancelEditing = () => {
    setEditing(false);
  };

  return (
    <StyledItemWrapper>
      {editing ? (
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            value={formData}
            onChange={(e) => setFormData(e.target.value)}
          />
          <ButtonWrapper>
            <Button type="submit" icon={<FontAwesomeIcon icon={faCheck} />} />
            <Button
              type="reset"
              icon={<FontAwesomeIcon icon={faTimes} />}
              click={cancelEditing}
            />
          </ButtonWrapper>
        </StyledForm>
      ) : (
        <>
          <TextWrapper>
            <H2>{name}</H2>
            <SpanBirthday>{birthday}</SpanBirthday>
          </TextWrapper>
          <ButtonWrapper>
            <Button icon={<FontAwesomeIcon icon={faEdit} />} click={editClickHandler} />
            <Button
              icon={<FontAwesomeIcon icon={faTrashAlt} />}
              click={() => deleteItem(id)}
            />
          </ButtonWrapper>
        </>
      )}
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
