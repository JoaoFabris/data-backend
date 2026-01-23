function isValidDate(date: string): boolean {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(date)) return false;

  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) return false;

  const isoDate = parsedDate.toISOString().split("T")[0];
  return isoDate === date;
}

isValidDate("2025-01-10"); // true
isValidDate("2025-13-01"); // false
isValidDate("2025-02-30"); // false
isValidDate("abc");        // false