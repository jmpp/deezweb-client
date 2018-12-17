export default function toMinutes(seconds) {
  const rest = seconds % 60;
  return `${Math.floor(seconds / 60)} min ${rest}`;
}
