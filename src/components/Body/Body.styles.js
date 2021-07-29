import styled from "styled-components";

const StyledBody = styled.div`
  width: 100%;
  padding: 20px;
  height: calc(100% - var(--header-height));
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: var(--clr-primary) white;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    border-bottom-right-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--clr-primary);
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--clr-secondary);
  }
`;

export { StyledBody };
