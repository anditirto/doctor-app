export const getChatTime = (date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${hours}:${minutes} ${hours >= 12 ? 'PM' : 'AM'}`;
};

export const getChatDate = (olddate) => {
  const year = olddate.getFullYear();
  const month = olddate.getMonth() + 1;
  const date = olddate.getDate();

  return `${year}-${month}-${date}`;
};
