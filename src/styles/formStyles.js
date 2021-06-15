import styled from "styled-components";
import { SpanError } from "../styles/textStyles";

const StyledForm = styled.form`
  width: 100%;

  & ${SpanError} {
    margin-left: 10px;
  }
`;

const StyledInputGroup = styled.div`
  width: 100%;
  height: 65px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledLabel = styled.label``;

const StyledInput = styled.input`
  width: 200px;
  padding: 5px 10px;
  border: 1px solid var(--clr-primary);
  border-radius: 10px;

  &:focus {
    outline: none;
    box-shadow: var(--box-shadow);
  }
`;

export { StyledForm, StyledInputGroup, StyledLabel, StyledInput };
