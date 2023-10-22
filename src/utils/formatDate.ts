export default function formatDate(date: string) {
  const apiDate = new Date(date);

  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const day = apiDate.getDate();
  const month = monthNames[apiDate.getMonth()];
  const year = apiDate.getFullYear();

  const formattedDate = `${day} ${month}, ${year}`;

  return formattedDate;
}
