import styled from "styled-components";

const StyledButton = styled.button`
  padding: 5px 10px;
  color: var(--clr-primary);
  background-color: transparent;
  border: 2px solid var(--clr-primary);
  border-radius: 10px;
  cursor: pointer;
  transition: box-shadow 0.2s ease;

  &:hover,
  &:active {
    box-shadow: var(--box-shadow);
  }
`;

export { StyledButton };
