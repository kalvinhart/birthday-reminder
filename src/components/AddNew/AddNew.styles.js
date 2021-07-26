import styled from "styled-components";

const StyledAddNewWrapper = styled.div`
  position: absolute;
  top: var(--header-height);
  left: 0;
  width: 100%;
  height: ${(props) => (props.show ? "250px" : "0")};
  background-color: white;
  opacity: ${(props) => (props.show ? "1" : "0")};
  overflow-y: hidden;
  transition: height 0.3s ease-out, opacity 0.2s ease-out;
  border-bottom: 2px solid grey;

  ${(props) => props.show && "box-shadow: var(--box-shadow-bottom)"};
`;

const StyledAddNewContainer = styled.div`
  width: 100%;
  height: 100px;
  padding: 20px;
`;

export { StyledAddNewWrapper, StyledAddNewContainer };
