import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { StyledAddNewWrapper, StyledAddNewContainer } from "./AddNew.styles";
import {
  StyledForm,
  StyledInputGroup,
  StyledLabel,
  StyledInput,
} from "../../styles/formStyles.js";
import { SpanError } from "../../styles/textStyles";
import Button from "../Button/Button";

const AddNew = ({ showAdd, setShowAdd, data, setData, handleSubmit }) => {
  const [formData, setFormData] = useState({ name: "", date: "" });
  const [error, setError] = useState(false);

  const validateForm = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.date) {
      setError(true);
      return;
    }
    let newData = { ...formData, id: uuidv4() };
    handleSubmit(newData);
    setFormData({ name: "", date: "" });
    setShowAdd(false);
  };

  return (
    <StyledAddNewWrapper className={showAdd ? "show" : "hide"}>
      <StyledAddNewContainer>
        <StyledForm onSubmit={(e) => validateForm(e)}>
          <StyledInputGroup>
            <StyledLabel htmlFor="name">Name:</StyledLabel>
            <StyledInput
              id="name"
              type="text"
              maxLength="20"
              placeholder="Enter name..."
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </StyledInputGroup>
          <StyledInputGroup>
            <StyledLabel htmlFor="date">Date:</StyledLabel>
            <StyledInput
              id="date"
              type="text"
              placeholder="Enter date..."
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </StyledInputGroup>
          <Button type="submit" text="Confirm" click={(e) => validateForm(e)} />
          {error && <SpanError>Please enter a valid name and date.</SpanError>}
        </StyledForm>
      </StyledAddNewContainer>
    </StyledAddNewWrapper>
  );
};

AddNew.propTypes = {
  showAdd: PropTypes.bool.isRequired,
  setShowAdd: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default AddNew;
