import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  if (!dateString) {
    return <p>Invalid date</p>;  // or return null, or some other placeholder
  }

  try {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
  } catch (error) {
    console.error("An error occurred while formatting the date:", error);
    return <p>Invalid date</p>;  // or return null, or some other placeholder
  }
}
