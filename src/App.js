import GlobalStyle from "./styles/globalStyles";

import AppContainer from "./components/AppContainer/AppContainer";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <Body></Body>
      </AppContainer>
    </>
  );
}

export default App;
