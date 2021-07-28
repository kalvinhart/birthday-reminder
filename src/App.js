import { useState, useEffect } from "react";
import GlobalStyle from "./styles/globalStyles";

import AppContainer from "./components/AppContainer/AppContainer";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import AddNew from "./components/AddNew/AddNew";
import BirthdayItem from "./components/BirthdayItem/BirthdayItem";

import { createDateString, orderByDate, updateDateIfPast } from "./helpers/dateHelpers";

import { data as initialData } from "./data";

const App = () => {
  const [data, setData] = useState(initialData);
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    const init = (dataArray) => {
      const updatedData = checkIfUpdatesRequired(dataArray);
      const orderedData = orderByDate(updatedData);
      return orderedData;
    };

    if (localStorage.getItem("birthdays")) {
      const rawData = JSON.parse(localStorage.getItem("birthdays"));
      const preparedData = init(rawData);
      setData(preparedData);
    } else {
      const preparedData = init(data);
      saveData(preparedData);
    }
  }, [data]);

  const checkIfUpdatesRequired = (data) => {
    const result = data.map((item) => {
      const updateRequired = updateDateIfPast(item.date);
      if (!updateRequired) return item;
      return { ...item, date: updateRequired };
    });
    return result;
  };

  const saveData = (newData) => {
    const orderedData = orderByDate(newData);
    setData(orderedData);
    localStorage.setItem("birthdays", JSON.stringify(orderedData));
  };

  const addData = (newData) => {
    const dataCopy = [...data, newData];
    saveData(dataCopy);
  };

  const deleteItem = (id) => {
    if (!id) return;
    const newData = data.filter((item) => item.id !== id);
    saveData(newData);
  };

  const updateData = (id, newData) => {
    const dataCopy = data.map((item) => {
      if (item.id !== id) return item;
      return newData;
    });
    saveData(dataCopy);
  };

  let birthdayItems;
  if (data.length > 0) {
    birthdayItems = data.map((item) => {
      return (
        <BirthdayItem
          key={item.id}
          id={item.id}
          name={item.name}
          birthday={createDateString(item.date)}
          updateItem={updateData}
          deleteItem={deleteItem}
        />
      );
    });
  }

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header showAdd={showAdd} setShowAdd={setShowAdd} />
        <AddNew showAdd={showAdd} setShowAdd={setShowAdd} addData={addData} />
        <Body>{data.length > 0 ? birthdayItems : "You have no reminders"}</Body>
      </AppContainer>
    </>
  );
};

export default App;
