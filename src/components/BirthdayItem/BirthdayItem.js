import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { StyledItemWrapper, TextWrapper, ButtonWrapper } from "./BirthdayItem.styles";
import { H2, SpanBirthday, SpanToday, SpanMonth } from "../../styles/textStyles";
import { StyledForm, StyledInput } from "../../styles/formStyles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  reverseDateString,
  updateDateIfPast,
  birthdayIsToday,
  birthdayIsThisMonth,
} from "../../helpers/dateHelpers";

const BirthdayItem = ({ id, name, birthday, updateItem, deleteItem }) => {
  const [editing, setEditing] = useState(false);
  const [editingName, setEditingName] = useState(name);
  const [date, setDate] = useState(new Date(reverseDateString(birthday)));
  const [todayStyle, setTodayStyle] = useState(false);
  const [monthStyle, setMonthStyle] = useState(false);

  useEffect(() => {
    setTodayStyle(birthdayIsToday(birthday));
    setMonthStyle(birthdayIsThisMonth(birthday));
  }, [birthday]);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!editingName || !date) return;
    const newData = {
      id: id,
      name: editingName,
      date: date,
    };
    updateItem(id, newData);
    setEditing(false);
  };

  const handleDateChange = (date) => {
    const needNewDate = updateDateIfPast(date);
    if (!needNewDate) {
      setDate(date);
      return;
    }
    setDate(needNewDate);
  };

  const editClickHandler = () => {
    setEditing(true);
  };

  const cancelEditing = () => {
    setEditing(false);
  };

  return (
    <StyledItemWrapper today={todayStyle} thisMonth={monthStyle} editing={editing}>
      {editing ? (
        <StyledForm onSubmit={handleUpdate}>
          <StyledInput
            type="text"
            value={editingName}
            onChange={(e) => setEditingName(e.target.value)}
          />
          <DatePicker
            id="date"
            dateFormat="dd/MM/yyyy"
            selected={date}
            onChange={handleDateChange}
            showMonthDropdown
            withPortal
          />
          <ButtonWrapper>
            <Button type="submit" icon={<FontAwesomeIcon icon={faCheck} />} />
            <Button
              type="button"
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
            <Button
              type="button"
              icon={<FontAwesomeIcon icon={faEdit} />}
              click={editClickHandler}
            />
            <Button
              type="button"
              icon={<FontAwesomeIcon icon={faTrashAlt} />}
              click={() => deleteItem(id)}
            />
          </ButtonWrapper>
          {todayStyle && (
            <TextWrapper>
              <SpanToday>{`It's ${name}'s birthday today!`}</SpanToday>
            </TextWrapper>
          )}
          {monthStyle ? (
            !todayStyle ? (
              <TextWrapper>
                <SpanMonth>{`It's ${name}'s birthday this month!`}</SpanMonth>
              </TextWrapper>
            ) : null
          ) : null}
        </>
      )}
    </StyledItemWrapper>
  );
};

BirthdayItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  updateItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default BirthdayItem;
