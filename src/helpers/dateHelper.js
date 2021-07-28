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
  const reversedString = splitString.reverse();
  const joinedString = reversedString.join("/");
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

const updateDateIfPast = (date) => {
  if (typeof date === "string") {
    date = new Date(date);
  }
  const now = new Date();
  date.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);
  if (date < now) {
    const newDateMs = date.setFullYear(date.getFullYear() + 1);
    const newDate = new Date(newDateMs);
    return newDate;
  }
  return false;
};

const birthdayIsToday = (birthdayDate) => {
  const today = new Date().setHours(0, 0, 0, 0);
  const reversedString = reverseDateString(birthdayDate);
  const birthday = new Date(reversedString).setHours(0, 0, 0, 0);
  return today === birthday;
};

const birthdayIsThisMonth = (birthdayDate) => {
  const today = new Date();
  const reversedString = reverseDateString(birthdayDate);
  const birthday = new Date(reversedString);
  if (today.getFullYear() !== birthday.getFullYear()) return false;
  return today.getMonth() === birthday.getMonth();
};

export {
  createDateString,
  reverseDateString,
  orderByDate,
  updateDateIfPast,
  birthdayIsToday,
  birthdayIsThisMonth,
};
