const createDateString = (date) => {
  if (typeof date === "string") {
    date = new Date(date);
  }
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

const orderByDate = (data) => {
  data.sort((a, b) => {
    const date1 = new Date(a.date);
    const date2 = new Date(b.date);
    return date1 - date2;
  });
  return data;
};

export { createDateString, reverseDateString, orderByDate };
