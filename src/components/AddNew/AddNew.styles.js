import styled from "styled-components";

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

  &.hide {
    display: none;
  }
`;

const StyledAddNewContainer = styled.div`
  width: 100%;
  height: 100px;
  padding: 20px;
`;

export { StyledAddNewWrapper, StyledAddNewContainer };
