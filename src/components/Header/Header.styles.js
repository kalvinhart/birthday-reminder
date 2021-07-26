import styled from "styled-components";

const StyledHeader = styled.div`
  width: 100%;
  height: var(--header-height);
  padding: 10px 20px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid grey;
  box-shadow: var(--box-shadow-bottom);
`;

export { StyledHeader };
