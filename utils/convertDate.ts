export function convertDate(inputDate: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const outputDate: string = new Date(inputDate).toLocaleDateString(
    "en-US",
    options
  );
  return outputDate;
}
