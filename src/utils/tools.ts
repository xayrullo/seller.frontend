const tools = {
  isValidDate(day: number, month: number, year: number): boolean {
    var d = new Date(year, month - 1, day);
    if (
      d.getFullYear() === year &&
      d.getMonth() === month - 1 &&
      d.getDate() === day
    ) {
      return true;
    }
    return false;
  },
};

export default tools;
