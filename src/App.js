import { useState, useEffect } from "react";
import GlobalStyle from "./styles/globalStyles";

import AppContainer from "./components/AppContainer/AppContainer";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import AddNew from "./components/AddNew/AddNew";
import BirthdayItem from "./components/BirthdayItem/BirthdayItem";

function App() {
  const [data, setData] = useState([]);
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("birthdays")) {
      setData(JSON.parse(localStorage.getItem("birthdays")));
    }
  }, []);

  const handleSubmit = (newData) => {
    const dataCopy = data;
    dataCopy.push(newData);
    setData(dataCopy);
    localStorage.setItem("birthdays", JSON.stringify(dataCopy));
  };

  const deleteItem = (id) => {
    if (!id) return;
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header showAdd={showAdd} setShowAdd={setShowAdd} />
        <AddNew
          showAdd={showAdd}
          setShowAdd={setShowAdd}
          data={data}
          setData={setData}
          handleSubmit={handleSubmit}
        />
        <Body>
          {data.length > 0
            ? data.map((item) => {
                return (
                  <BirthdayItem
                    id={item.id}
                    name={item.name}
                    birthday={item.date}
                    deleteItem={deleteItem}
                  />
                );
              })
            : "You have no reminders"}
        </Body>
      </AppContainer>
    </>
  );
}

export default App;
