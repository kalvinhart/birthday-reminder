import styled from "styled-components";
import { SpanError } from "../../styles/textStyles";

const StyledAddNewWrapper = styled.div`
  position: absolute;
  top: var(--header-height);
  left: 0;
  width: 100%;
  height: 0;
  background-color: white;
  opacity: 0;
  overflow-y: hidden;
  transition: height 0.3s ease-out;
  border-bottom: 2px solid var(--clr-primary);

  &.show {
    height: 250px;
    opacity: 1;
    box-shadow: var(--box-shadow-bottom);
  }
`;

const StyledAddNewContainer = styled.div`
  width: 100%;
  height: 100px;
  padding: 20px;
`;

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

export {
  StyledAddNewWrapper,
  StyledAddNewContainer,
  StyledForm,
  StyledInputGroup,
  StyledLabel,
  StyledInput,
};
