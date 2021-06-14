import styled from "styled-components";

const StyledBody = styled.div`
  width: 100%;
  height: calc(100% - var(--header-height));
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    border-bottom-right-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--clr-primary);
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--clr-primary);
  }
`;

export { StyledBody };
