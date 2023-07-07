export const formatDate = (date: string) => {
  const formatMonthInString = (month: string) => {
    const months: { [key: string]: string } = {
      "01": "янв.",
      "02": "фев.",
      "03": "марта",
      "04": "апр.",
      "05": "мая",
      "06": "июня",
      "07": "июля",
      "08": "авг.",
      "09": "сен.",
      "10": "окт.",
      "11": "ноя.",
      "12": "дек.",
    };

    return months[month];
  };

  if (!date) return "";
  
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);

  return `${day} ${formatMonthInString(month)} ${year}`;
};
