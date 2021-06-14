import styled from "styled-components";

const StyledItemWrapper = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 10px;
    border-bottom: 2px dashed var(--clr-primary);
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
