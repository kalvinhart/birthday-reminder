import styled from "styled-components";

const H1 = styled.h1`
  display: inline-block;
  font-size: 22px;
  font-weight: 600;
  background: var(--gradient);
  background-clip: text;
  -webkit-background-clip: text;
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
`;

const H2 = styled.h2`
  display: inline-block;
  font-size: 16px;
  font-weight: 400;
`;

const SpanBirthday = styled.span`
  font-size: 10px;
`;

const SpanToday = styled.span`
  font-size: 22px;
  font-weight: 400;
`;

const SpanMonth = styled.span`
  font-size: 18px;
  font-weight: 400;
`;

const SpanError = styled.span`
  font-size: 12px;
  font-weight: 700;
`;

export { H1, H2, SpanBirthday, SpanToday, SpanMonth, SpanError };
