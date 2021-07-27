const createDateString = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const dateString = `${day}/${month}/${year}`;
  return dateString;
};

const reverseDateString = (string) => {
  const splitString = string.split("/");
  const reveresedString = splitString.reverse();
  const joinedString = reveresedString.join("/");
  return joinedString;
};

const orderByDate = (data) => {};

export { createDateString, reverseDateString, orderByDate };
