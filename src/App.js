import { useState, useEffect } from "react";
import GlobalStyle from "./styles/globalStyles";

import AppContainer from "./components/AppContainer/AppContainer";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import BirthdayItem from "./components/BirthdayItem/BirthdayItem";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <Body>
          <BirthdayItem name="Kalvin" birthday="25/12" />
          <BirthdayItem name="Charlotte" birthday="20/12" />
          <BirthdayItem name="Mum" birthday="07/11" />
          <BirthdayItem name="Kalvin" birthday="25/12" />
          <BirthdayItem name="Charlotte" birthday="20/12" />
          <BirthdayItem name="Mum" birthday="07/11" />
          <BirthdayItem name="Kalvin" birthday="25/12" />
          <BirthdayItem name="Charlotte" birthday="20/12" />
          <BirthdayItem name="Mum" birthday="07/11" />
          <BirthdayItem name="Kalvin" birthday="25/12" />
          <BirthdayItem name="Charlotte" birthday="20/12" />
          <BirthdayItem name="Mum" birthday="07/11" />
        </Body>
      </AppContainer>
    </>
  );
}

export default App;
