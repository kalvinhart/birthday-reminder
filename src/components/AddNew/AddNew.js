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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddNew = ({ showAdd, setShowAdd, addData }) => {
  const [name, setName] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [error, setError] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const validateForm = (e) => {
    e.preventDefault();
    if (!name || !selectedDate) {
      setError(true);
      return;
    }
    let newData = { id: uuidv4(), name: name, date: selectedDate };
    addData(newData);
    setName("");
    setSelectedDate(new Date());
    setShowAdd(false);
    setError(false);
  };

  return (
    <StyledAddNewWrapper show={showAdd}>
      <StyledAddNewContainer>
        <StyledForm onSubmit={(e) => validateForm(e)}>
          <StyledInputGroup>
            <StyledLabel htmlFor="name">Name:</StyledLabel>
            <StyledInput
              id="name"
              type="text"
              maxLength="20"
              placeholder="Enter name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </StyledInputGroup>
          <StyledInputGroup>
            <StyledLabel htmlFor="date">Date:</StyledLabel>
            <DatePicker
              id="date"
              dateFormat="dd/MM/yyyy"
              selected={selectedDate}
              onChange={handleDateChange}
              showMonthDropdown
              withPortal
            />
          </StyledInputGroup>
          <Button type="submit" text="Confirm" click={() => {}} />
          {error && <SpanError>Please enter a valid name and date.</SpanError>}
        </StyledForm>
      </StyledAddNewContainer>
    </StyledAddNewWrapper>
  );
};

AddNew.propTypes = {
  showAdd: PropTypes.bool.isRequired,
  setShowAdd: PropTypes.func.isRequired,
  addData: PropTypes.func.isRequired,
};

export default AddNew;
