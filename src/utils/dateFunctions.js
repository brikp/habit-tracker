export const getDayOfWeek = date => {
  let dayOfWeek = date.getDay();
  switch (dayOfWeek) {
    case 0:
      dayOfWeek = 6;
      break;
    case 6:
      dayOfWeek = 0;
      break;
    default:
      dayOfWeek += 1;
  }
  return dayOfWeek;
};
