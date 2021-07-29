import styled from "styled-components";

const StyledButton = styled.button`
  ${(props) => {
    return props.icon ? "padding: 5px;" : "padding: 5px 10px;";
  }}
  color: var(--clr-primary);
  background-color: transparent;
  ${(props) => {
    return props.icon ? "border: none;" : "border: 2px solid var(--clr-primary);";
  }}
  border-radius: 10px;
  cursor: pointer;
  transition: box-shadow 0.2s ease;

  &:hover,
  &:active {
    box-shadow: var(--box-shadow-btn);
  }

  & svg {
    font-size: 20px;
  }
`;

export { StyledButton };
