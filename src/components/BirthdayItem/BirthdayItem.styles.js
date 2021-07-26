import styled from "styled-components";
import { StyledInput } from "../../styles/formStyles";

const StyledItemWrapper = styled.div`
  width: 100%;
  height: ${(props) => (props.editing ? "150px" : "50px")};
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: height 0.2s ease;

  &:not(:last-child) {
    border-bottom: 2px dashed var(--clr-primary);
  }

  & ${StyledInput} {
    margin-bottom: 10px;
  }
`;

const TextWrapper = styled.div`
  & h2 {
    margin-right: 10px;
  }
`;

const ButtonWrapper = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-between;
`;

export { StyledItemWrapper, TextWrapper, ButtonWrapper };
